const assert = require('chai').assert;
const expect = require('chai').expect;
const UserService = require('../../../services/user.service');
const db = require('../../../db/models');

describe('유저 서비스 테스트', function () {
  beforeEach(function (done) {
    db.sequelize
      .sync()
      .then(() => {
        console.log(`🌟 DB 연결 성공!`);
        done();
      })
      .catch(console.error);
  });

  afterEach(function (done) {
    db.sequelize
      .sync() // create the database table for our model(s)
      .then(async () => {
        await db.sequelize.drop();
      })
      .then(() => {
        done();
      })
      .catch(console.error);
  });

  it('createUser', async () => {
    const { user } = await UserService.createUser({
      requestBody: {
        username: 'test',
        email: 'test@test.com',
        password: '1234',
      },
    });
    assert.isNotNull(user);
  });
  it('findUserById', async () => {
    const { user: newUser } = await UserService.createUser({
      requestBody: {
        username: 'test',
        email: 'test@test.com',
        password: '1234',
      },
    });
    const { user: findUser } = await UserService.findUserById({
      userId: newUser.id,
    });
    const username = findUser.username;
    expect(username).to.equal('test');
  });
  it('findByUserEmail', async () => {
    const { user: newUser } = await UserService.createUser({
      requestBody: {
        username: 'test',
        email: 'test@test.com',
        password: '1234',
      },
    });
    const { user: findUser } = await UserService.findUserByEmail({
      email: newUser.email,
    });
    const email = findUser.email;
    expect(email).to.equal('test@test.com');
  });
});
