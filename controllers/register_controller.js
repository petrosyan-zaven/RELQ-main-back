
const bcrypt = require('bcrypt');
const { User } = require('../models');
const { generateAccessToken } = require('../middleware/JWT/generateToken')
require('dotenv').config();
const JWT = require('jsonwebtoken');
const SECRET = process.env.SECRET;
const fs = require('fs');
const { log } = require('console');


async function register(req, res) {
  const { email, password, year} = req.body;
  const  firstName  = req.body.firstName;
  const imageName = req.file?.filename;
  console.log(req,"giui");
  console.log(req.file.filename,"name",req.file, "file");
  const image = imageName ? `${req.protocol}://${req.hostname}:${process.env.PORT}/images/${imageName}` : null;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const passwordRegex = /^(?=.*[a-zA-Z0-9]).{6,}$/;
  const nameRegex = /^[a-zA-Z]{3,}$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  } else if (!nameRegex.test(firstName)) {
    return res.status(400).json({ error: "Short first name" });
  } else if (!passwordRegex.test(password)) {
    return res.status(400).json({ error: "Invalid password format" });
  }

  try {
        const users = await User.findOne({ where: { email: email } });
        if (users) {
          return res.status(400).json({ error: "Email already exists" });
        }

    const salt = await bcrypt.genSalt(10);
    const hashed_password = await bcrypt.hash(password, salt);
    if (firstName) {
      const data = await User.create({
        firstName,
        email,
        password: hashed_password,
        year,
        image,
        role: 0
      });
      console.log(data , 'data');
      let token = generateAccessToken(email, 0);
      console.log(email, token);
      return res.status(201).json(data);
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

async function login(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      return res.status(400).send("Email is not correct");
    }

    const hashedPasswordMatch = await bcrypt.compare(password, user.password);
    if (hashedPasswordMatch) {
      const token = generateAccessToken( user.id, email, user.role);
      console.log(token);
      return res.send(JSON.stringify({ status: "Logged in", jwt: token, role: user.role, userid: user.id }));
    } else {
      return res.status(400).send("Invalid password");
    }
  } catch (error) {
    return res.status(500).json({ error: message });
  }
}


module.exports = { register, login };




// {
//   "firstName": "Lil",
//   "email": "Lil@gmail.com",
//   "password": "aaa111",
//   "year": 12,
//   "image": ""
// }


// const multer = require('multer');
// const path = require('path');


// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//     cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage: storage });


// async function register(req, res) {
//   // Existing code...

//   try {
//     const users = await User.findOne({ where: { email: email } });
//     if (users) {
//       return res.status(400).json({ error: "Email already exists" });
//     }

//     const salt = await bcrypt.genSalt(10);
//     const hashed_password = await bcrypt.hash(password, salt);

//     // Retrieve the uploaded image file
//     const imageName = req.file?.filename;
//     const image = imageName ? `${req.protocol}://${req.hostname}:${process.env.PORT}/uploads/${imageName}` : null;

//     if (firstName) {
//       const data = await User.create({
//         firstName,
//         email,
//         password: hashed_password,
//         year,
//         image,
//         role: 0
//       });

//       let token = generateAccessToken(email, 0);
//       console.log(email, token);
//       return res.status(201).json(data);
//     }
//   } catch (err) {
//     return res.status(500).json({ error: err.message });
//   }
// }


// async function createProduct(req, res) {
//   try {
//     const { productName, categoryId, description, price } = req.body;

//     // Retrieve the uploaded image file
//     const imageName = req.file?.filename;
//     const image = imageName ? `${req.protocol}://${req.hostname}:${process.env.PORT}/uploads/${imageName}` : null;

//     const product = await Product.create({
//       productName: productName,
//       categoryId: categoryId,
//       description: description,
//       price: price,
//       image: image
//     });

//     return res.status(201).json({ message: 'Product created', data: product });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: 'Internal server error' });
//   }
// }
