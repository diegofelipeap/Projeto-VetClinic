'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {

    static associate(models) {
    }
  }
  Pet.init({
    name: DataTypes.STRING,
    species: DataTypes.STRING,
    tutorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pet',
  });
  return Pet;
};