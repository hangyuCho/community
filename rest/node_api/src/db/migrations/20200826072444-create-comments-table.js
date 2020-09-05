'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Comment
    await queryInterface.createTable(
      'comments',
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
        desc: {
          type: Sequelize.DataTypes.STRING(500),
          allowNull: false,
        },
        PostId: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: 'posts',
            key: 'id',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
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
        modelName: 'Comment',
        tableName: 'comments',
        charset: 'utf8',
        collate: 'utf8_general_ci', // 한글 저장 , 이모티콘 저장
        Sequelize,
      }
    );
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('comments');
  },
};
