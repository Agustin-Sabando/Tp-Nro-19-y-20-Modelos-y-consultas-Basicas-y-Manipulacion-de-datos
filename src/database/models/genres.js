'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genres extends Model {
    static associate(models) {
    }
  }
  Genres.init({
    name: DataTypes.STRING,
    ranking: DataTypes.INTEGER,
    active: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Genres',
  });
  return Genres;
};