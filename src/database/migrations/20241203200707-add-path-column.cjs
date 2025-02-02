'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const tableInfo = await queryInterface.describeTable('categories');
    if (!tableInfo.path) {
      await queryInterface.addColumn('categories', 'path', {
        type: Sequelize.STRING,
        allowNull: true,
      });
      console.log('A coluna "path" foi adicionada à tabela "categories".');
    } else {
      console.log('A coluna "path" já existe na tabela "categories".');
    }
  },

  async down(queryInterface) {
    const tableInfo = await queryInterface.describeTable('categories');
    if (tableInfo.path) {
      await queryInterface.removeColumn('categories', 'path');
      console.log('A coluna "path" foi removida da tabela "categories".');
    } else {
      console.log('A coluna "path" não existe na tabela "categories".');
    }
  },
};
