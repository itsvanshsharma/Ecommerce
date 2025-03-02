const Sequelize = require('sequelize');

const sequelize = new Sequelize('ecommerce', 'root', 'Shiv@2022', {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;