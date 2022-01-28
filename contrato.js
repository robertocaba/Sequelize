'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contrato extends Model {
    
    static associate(models) {
      Contrato.belongsTo(models.Rcitas);
    }
  }
  Contrato.init({
    fecha: DataTypes.STRING,
    body: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Contrato',
  });
  return Contrato;
};