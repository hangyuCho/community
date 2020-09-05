const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class User extends Model {
  static init(sequelize) {
    return super.init(
      {
        username: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(255),
          allowNull: false,
          unique: true,
        },
        role: {
          type: DataTypes.ENUM('normal', 'special', 'admin'),
          allowNull: false,
          defaultValue: 'normal',
        },
        password: {
          type: DataTypes.STRING(255),
          allowNull: false, // 필수 (required의 의미)
        },
        avatar: {
          type: DataTypes.STRING(255),
        },
        facebook: {
          type: DataTypes.STRING(255),
        },
        twitter: {
          type: DataTypes.STRING(255),
        },
        github: {
          type: DataTypes.STRING(255),
        },
      },
      {
        modelName: 'User',
        tableName: 'users',
        charset: 'utf8',
        collate: 'utf8_general_ci', // 한글 저장 , 이모티콘 저장
        sequelize,
      }
    );
  }

  static associate(db) {
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Notice);
    db.User.hasMany(db.Comment);
    db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked' });
  }
};
