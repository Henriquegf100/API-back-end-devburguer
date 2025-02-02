'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    // Verifica se a coluna "category" existe antes de removê-la
    const tableInfo = await queryInterface.describeTable('products');
    if (tableInfo.category) {
      await queryInterface.removeColumn('products', 'category');
    } else {
      console.log('A coluna "category" não existe na tabela "products".');
    }
  },

  async down(queryInterface, Sequelize) {
    // Reverte a exclusão, adicionando novamente a coluna "category"
    const tableInfo = await queryInterface.describeTable('products');
    if (!tableInfo.category) {
      await queryInterface.addColumn('products', 'category', {
        type: Sequelize.STRING,
        allowNull: true,
      });
    } else {
      console.log('A coluna "category" já existe na tabela "products".');
    }
  },
};
