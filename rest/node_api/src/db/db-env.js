let DB_USERNAME;
let DB_PASSWORD;
let DB_DBNAME;
let DB_HOST;
let DB_PORT;

switch (process.env.NODE_ENV) {
  case 'development':
    DB_USERNAME = process.env.DB_DEV_USERNAME;
    DB_PASSWORD = process.env.DB_DEV_PASSWORD;
    DB_DBNAME = process.env.DB_DEV_DBNAME;
    DB_HOST = process.env.DB_DEV_HOST;
    DB_PORT = process.env.DB_DEV_PORT;
    break;
  case 'test':
    DB_USERNAME = process.env.DB_TEST_USERNAME;
    DB_PASSWORD = process.env.DB_TEST_PASSWORD;
    DB_DBNAME = process.env.DB_TEST_DBNAME;
    DB_HOST = process.env.DB_TEST_HOST;
    DB_PORT = process.env.DB_TEST_PORT;
    break;
  case 'production':
    DB_USERNAME = process.env.DB_PROD_USERNAME;
    DB_PASSWORD = process.env.DB_PROD_PASSWORD;
    DB_DBNAME = process.env.DB_PROD_DBNAME;
    DB_HOST = process.env.DB_PROD_HOST;
    DB_PORT = process.env.DB_PROD_PORT;
    break;
  default:
    DB_USERNAME = process.env.DB_DEV_USERNAME;
    DB_PASSWORD = process.env.DB_DEV_PASSWORD;
    DB_DBNAME = process.env.DB_DEV_DBNAME;
    DB_HOST = process.env.DB_DEV_HOST;
    DB_PORT = process.env.DB_DEV_PORT;
    break;
}

module.exports = {
  DB_USERNAME,
  DB_PASSWORD,
  DB_DBNAME,
  DB_HOST,
  DB_PORT,
};
