'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      User.belongsToMany(models.Vivienda,{
          through:models.Rcitas
        }, { onDelete: 'cascade' })
    }
  }
  User.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Introduce tu nombre",
        },
      },
    },
    apellidos: {
        type:DataTypes.STRING,
        allowNull: false,
        validate:{
          notNull:{
            msg: "Introduce el apellido"
          },
        },
      },
      email: {
        type:DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate:{
          unique:{
            msg:'email repetido'
          },
          notNull:{
            msg: "Introduce tu email"
          },
          isEmail:{
            msg: "Introduce un mail valido"
          },
        },
      
      },
      phone:{
        type:DataTypes.INTEGER,
        allowNull: false,
        isInt: true,
        validate:{
          notNull:{
            msg: "Introduce tu teléfono"
          },
          isInt:{
            msg: "solo números"
          },
  
        },
      },  
    password: DataTypes.STRING,
    rol: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};