const express = require('express');
const app=express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
require('dotenv').config();
const path = require('path');
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api', require('./routes/upload'))
const PORT = process.env.PORT || 5000;

const { user_route } = require('./routes/user_route');
const { category_route } = require('./routes/category_route');
const { product_route } = require('./routes/product_route');


const { Sequelize } = require('sequelize');
const config = require('./config/config.js');

const sequelize = new Sequelize(config.development);

// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection to the database has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// })();

user_route(app);
category_route(app);
product_route(app);

app.listen(PORT, () => console.log(`Server runing on port ${PORT}!`));