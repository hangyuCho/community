require('dotenv').config();
const mysql = require('mysql2/promise');
const db = require('./models');
const {
  DB_USERNAME,
  DB_PASSWORD,
  DB_DBNAME,
  DB_HOST,
  DB_PORT,
} = require('./db-env');

mysql
  .createConnection({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USERNAME,
    password: DB_PASSWORD,
  })
  .then((connection) => {
    connection
      .query(`CREATE DATABASE IF NOT EXISTS ${DB_DBNAME};`)
      .then(() => {
        console.info('Database create or successfully checked');
      })
      .then(() => {
        db.sequelize
          .sync()
          .then(() => {
            console.log(`🌟 DB 연결 성공!`);
          })
          .catch(console.error);
      })
      .catch((err) => {
        console.error(err);
        process.exit(0);
      });
  });
