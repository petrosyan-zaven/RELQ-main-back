const { Cart, User } =  require ('../models');

async function createCart(req, res) {
    try {
      const { userId, product_id } = req.body;
      const cart = await Cart.create({ userId: userId, product_id: product_id});
  
      return res.status(201).json({ message: 'Category created', data: cart });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  function getCart(req, res) {
    Cart.findAll({ include: User })
    .then((cart) => {
      res.json(cart);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
  }
  


 async function deleteCart(req, res) {
    const { id } = req.params;
  
    try {
      await Cart.destroy({ where: { id } });
      res.json({ response: "User deleted" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  module.exports = { createCart, deleteCart, getCart };
