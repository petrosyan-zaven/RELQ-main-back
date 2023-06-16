const { Product, Category } = require('../models');
const fs = require('fs')


function allProducts(req, res) {
    Product.findAll()
    .then((prod) => {
        res.json(prod)}).catch((err) => {
            res.status(500).json({error:err})
        }).catch((err) => {
            res.status(500).json({error:err})
        })
}

  function productById(req, res) {
    const { id } = req.params
    Product.findOne({where:{ id }})
    .then((prod) => {
        res.status(201).json(prod)
    }).catch((err) => {
        res.status(500).json({error:err.message})
    })
}


async function productByCategory(req, res) {
  try {
    const { id } = req.params;

    console.log(id);
    const products = await Product.findAll({
      where: { categoryId: id},
      // include: 
      //   {
      //     model: Category,
      //     atributs: ['name']
      //   },
    });

    res.json(products);
  } catch (error) {
    console.error('Failed to fetch products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
}


async function createProduct(req, res) {
  try {
    const { productName, categoryId, description, price } = req.body;
    const imageName = req.file?.filename;

    const image = imageName ? `${req.protocol}://${req.hostname}:${process.env.PORT}/images/${imageName}` : null;
    const product = await Product.create({ productName: productName, categoryId: categoryId, description: description, price: price, image: image});

    return res.status(201).json({ message: 'Category created', data: product });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

function updateProduct(req, res) {
  const { productName, categoryId, description, price } = req.body
  const image =  req.file.path
  const { id } = req.params
  Product.update({ productName, categoryId, description, price, image }, {where:{ id: id }})
  .then((prod) => {
      res.status(201).json(prod)
  }).catch((err) => {
      res.status(500).json({error:err.message})
  })
}

function downloadCount(req, res) {
  const { downloaded } = req.body
  const { id } = req.params
  Product.update({ downloaded }, {where:{ id: id }})
  .then((prod) => {
      res.status(201).json(prod)
  }).catch((err) => {
      res.status(500).json({error:err.message})
  })
}



function deleteProduct(req, res) {
    const { id } = req.params;
    Product.destroy({ where: { id } })
      .then((prod) => {
        res.json({ response: "deleted" });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  }

module.exports = { allProducts, productByCategory, productById, deleteProduct, updateProduct, downloadCount, createProduct }

