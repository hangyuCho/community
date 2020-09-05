import { createConnection } from 'typeorm';

export const testConn = (drop = false) => {
  return createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'ricky',
    password: '',
    database: 'graphql-ts-server-boilerplate-test', // createdb graphql-ts-server-boilerplate-test
    synchronize: drop,
    dropSchema: drop,
    entities: [__dirname + '/../entity/*.*'],
  });
};
