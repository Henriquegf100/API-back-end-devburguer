'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const tableInfo = await queryInterface.describeTable('products');
    if (!tableInfo.category_id) {
      await queryInterface.addColumn('products', 'category_id', {
        type: Sequelize.INTEGER,
        references: {
          model: 'categories',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      });
      console.log('A coluna "category_id" foi adicionada à tabela "products".');
    } else {
      console.log('A coluna "category_id" já existe na tabela "products".');
    }
  },

  async down(queryInterface) {
    const tableInfo = await queryInterface.describeTable('products');
    if (tableInfo.category_id) {
      await queryInterface.removeColumn('products', 'category_id');
      console.log('A coluna "category_id" foi removida da tabela "products".');
    } else {
      console.log('A coluna "category_id" não existe na tabela "products".');
    }
  },
};
