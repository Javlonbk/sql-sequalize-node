const Sequelize = require('sequelize');

const sequelize = new Sequelize('products', 'root', 'your_password',{
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
