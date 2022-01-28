'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rcitas extends Model {
    /**
     No poner comentarios
     */
    static associate(models) {
     
    }
  }
  Rcitas.init({
    nombre: DataTypes.STRING,
    fecha: DataTypes.STRING,
    hora: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rcitas',
  });
  return Rcitas;
};