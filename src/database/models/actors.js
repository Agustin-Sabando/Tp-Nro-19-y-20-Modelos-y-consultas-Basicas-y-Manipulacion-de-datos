'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Actors extends Model {
    static associate(models) {
    }
  }
  Actors.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    rating: DataTypes.DECIMAL(3,1),
    favorite_movie_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Actors',
  });
  return Actors;
};