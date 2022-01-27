'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vivienda extends Model {
   
    static associate(models) {
      
        Vivienda.belongsToMany(models.User,{
          through:models.Rcitas
        }, { onDelete: 'cascade' })
    }
  }
  Vivienda.init({
    direccion: DataTypes.STRING,
    poplacion: DataTypes.STRING,
    codigoPostal: DataTypes.INTEGER,
    tipoV: DataTypes.STRING,
    TipoG: DataTypes.STRING,
    Imagen: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Vivienda',
  });
  return Vivienda;
};