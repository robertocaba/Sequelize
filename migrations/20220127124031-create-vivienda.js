'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Viviendas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      direccion: {
        type: Sequelize.STRING
      },
      poplacion: {
        type: Sequelize.STRING
      },
      codigoPostal: {
        type: Sequelize.INTEGER
      },
      tipoV: {
        type: Sequelize.STRING
      },
      TipoG: {
        type: Sequelize.STRING
      },
      Imagen: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Viviendas');
  }
};