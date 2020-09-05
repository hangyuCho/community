'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Like
    await queryInterface.createTable(
      'Like',
      {
        PostId: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'posts',
            key: 'id',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
        UserId: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'users',
            key: 'id',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
        createdAt: {
          type: Sequelize.DataTypes.DATE,
        },
        updatedAt: {
          type: Sequelize.DataTypes.DATE,
        },
      },
      {
        modelName: 'Like',
        tableName: 'Like',
        charset: 'utf8',
        collate: 'utf8_general_ci', // 한글 저장 , 이모티콘 저장
        Sequelize,
      }
    );
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Like');
  },
};
