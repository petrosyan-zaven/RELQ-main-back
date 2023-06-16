const { User } = require('../models');

function allUsers(req, res) {
    User.findAll()
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  }

  function userById(req, res){
    const {id} = req.params
    User.findOne({where:{ id }})
    .then((user) => {
        res.status(201).json(user)
    }).catch((err) => {
        res.status(500).json({error:err.message})
    })
} 

function updateUser(req, res) {
  const { firstName, lastName, email, password, gender, year, image } = req.body
  const {id} = req.params
  User.update({ firstName, lastName, email, password, gender, year, image }, {where:{id:id}})
  .then((users) => {
      res.status(201).json(users)
  }).catch((err) => {
      res.status(500).json({error:err.message})
  })
}

async function deleteUser(req, res) {
  const { id } = req.params;

  try {
    await User.destroy({ where: { id } });
    res.json({ response: "User deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

  module.exports = { allUsers, userById, updateUser, deleteUser };