const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Notice extends Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        desc: {
          type: DataTypes.STRING(10000),
          allowNull: false,
        },
        view: {
          type: DataTypes.INTEGER,
          defaultValue: 0,
        },
      },
      {
        modelName: 'Notice',
        tableName: 'notices',
        charset: 'utf8',
        collate: 'utf8_general_ci', // 한글 저장 , 이모티콘 저장
        sequelize,
      }
    );
  }

  static associate(db) {
    db.Notice.belongsTo(db.User);
  }
};
