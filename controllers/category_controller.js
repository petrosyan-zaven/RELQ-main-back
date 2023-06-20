const { Category } =  require ('../models');


function allCategory(req, res) {
    Category.findAll()
    .then((category) => {
        res.json(category)}).catch((err) => {
            res.status(500).json({error:err.message})
        }).catch((err) => {
            res.status(500).json({error:err.message})
        })
}

function categoryById(req,res){
    const { id } = req.params;
    Category.findOne({where:{id}
    })
    .then((category)=>{
        res.json(category)}).catch((err)=>{
            res.status(500).json({error:err.message})
        }).catch((err)=> {
            res.status(500).json({error:err.message})
        })
}

async function createCategory(req, res) {
    try {
      const { categoryName } = req.body;
      const category = await Category.create({ categoryName });
  
      return res.status(201).json({ message: 'Category created', data: category });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
  

  function updateCategory(req, res) {
    const { categoryName } = req.body
 
    const { id } = req.params
    Category.update({  categoryName }, {where:{ id: id }})
    .then((cat) => {
        res.status(201).json({cat: "Updated"})
    }).catch((err) => {
        res.status(500).json({error:err.message})
    })
  }

  
async function deleteCategory(req, res) {
  const { id } = req.params;

  try {
    await Category.destroy({ where: { id } });
    res.json({ response: "Category deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}





module.exports = { allCategory, categoryById, createCategory, deleteCategory, updateCategory }

