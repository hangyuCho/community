'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Categories
    await queryInterface.createTable(
      'categories',
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        createdAt: {
          type: Sequelize.DataTypes.DATE,
        },
        updatedAt: {
          type: Sequelize.DataTypes.DATE,
        },
        name: {
          type: Sequelize.DataTypes.STRING(30),
          allowNull: false,
          unique: true,
          trim: true,
          isLowercase: true,
        },
      },
      {
        modelName: 'Category',
        tableName: 'categories',
        charset: 'utf8',
        collate: 'utf8_general_ci', // 한글 저장 , 이모티콘 저장
        Sequelize,
      }
    );
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('categories');
  },
};
