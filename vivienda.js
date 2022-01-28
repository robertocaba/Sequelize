'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vivienda extends Model {
   
    static associate(models) {
      Vivienda.belongsToMany(models.User,{
          through:models.Rcitas
        }, { onDelete: 'cascade' })
    }
  }
  Vivienda.init({
    direccion:{type:DataTypes.STRING,
    allowNull: false,
    validate:{
      notNull: {
        msg: "Introduce tu dirección",
      },
     },
    },

    poplacion:{type:DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Introduce tu población"
      },
     },
    },
    
    codigoPostal: {type:DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Introduce tu código"
      },
     },
    },
    
    tipoV: {type:DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Piso, Casa, Chalet, Adosado"
      },
     },
    }, 
    
    tipoG: {type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Compra, Venta, Alquiler"
        },
       },
      },

    Imagen: DataTypes.STRING
  }, 
  {
    sequelize,
    modelName: 'Vivienda',
  });
  return Vivienda;
};