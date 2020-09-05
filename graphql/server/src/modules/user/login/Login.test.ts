import { Connection } from 'typeorm';
import { testConn } from '../../../test-utils/testConn';

let conn: Connection;
beforeAll(async () => {
  conn = await testConn();
});

afterAll(async () => {
  await conn.close();
});

// const loginMutation = `
//   mutation Login($input: LoginInput!){
//     login(
//       input: $input
//     ){
//      email
//      password
//     }
//   }
// `;

// describe('Login', () => {});
