const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const Sample = sequelize.define('Sample', {
  // Define your model attributes here
});

module.exports = Sample;
