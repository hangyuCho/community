const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Category extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: DataTypes.STRING(30),
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
        sequelize,
      }
    );
  }

  static associate(db) {
    db.Category.hasOne(db.Post, {
      foreignKey: {
        field: 'CategoryId',
        allowNull: false,
      },
    });
    db.Category.hasOne(db.Openchat, {
      foreignKey: {
        field: 'CategoryId',
        allowNull: false,
      },
    });
  }
};
