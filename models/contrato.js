'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contrato extends Model {
    
    static associate(models) {
      Contrato.belongsTo(models.Rcitas);
    }
  }
  Contrato.init({
    nombre: DataTypes.STRING,
    body: DataTypes.STRING,
    RcitasId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Contrato',
  });
  return Contrato;
};