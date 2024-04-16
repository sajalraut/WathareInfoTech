const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'manager',
  database: 'wathareinfo'
});

module.exports = sequelize;
