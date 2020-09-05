'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Notice
    await queryInterface.createTable(
      'notices',
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
        title: {
          type: Sequelize.DataTypes.STRING(255),
          allowNull: false,
        },
        desc: {
          type: Sequelize.DataTypes.STRING(10000),
          allowNull: false,
        },
        view: {
          type: Sequelize.DataTypes.INTEGER,
          defaultValue: 0,
        },
        UserId: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: 'users',
            key: 'id',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
      },
      {
        modelName: 'Notice',
        tableName: 'notices',
        charset: 'utf8',
        collate: 'utf8_general_ci', // 한글 저장 , 이모티콘 저장
        Sequelize,
      }
    );
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('notices');
  },
};
