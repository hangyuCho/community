'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // User
    await queryInterface.createTable(
      'users',
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
        username: {
          type: Sequelize.DataTypes.STRING(255),
          allowNull: false,
        },
        email: {
          type: Sequelize.DataTypes.STRING(255),
          allowNull: false,
          unique: true,
        },
        role: {
          type: Sequelize.DataTypes.ENUM('normal', 'special', 'admin'),
          allowNull: false,
          defaultValue: 'normal',
        },
        password: {
          type: Sequelize.DataTypes.STRING(255),
          allowNull: false, // 필수 (required의 의미)
        },
        avatar: {
          type: Sequelize.DataTypes.STRING(255),
        },
        facebook: {
          type: Sequelize.DataTypes.STRING(255),
        },
        twitter: {
          type: Sequelize.DataTypes.STRING(255),
        },
        github: {
          type: Sequelize.DataTypes.STRING(255),
        },
      },
      {
        modelName: 'User',
        tableName: 'users',
        charset: 'utf8',
        collate: 'utf8_general_ci', // 한글 저장 , 이모티콘 저장
        Sequelize,
      }
    );
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('users');
  },
};
