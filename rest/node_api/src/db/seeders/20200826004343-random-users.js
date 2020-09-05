'use strict';
const faker = require('faker');
const { generateHashedPassword } = require('../../helper/auth');

const generateUsers = async () => {
  const hashedPassword = await generateHashedPassword('1234');
  let users = [];
  for (let i = 0; i <= 99; i++) {
    let username = faker.name.findName();
    let email = faker.internet.email();
    let createdAt = faker.date.between('2020-01-01', '2020-08-26');
    let updatedAt = faker.date.between('2020-01-01', '2020-08-26');
    users.push({
      username,
      email: email,
      password: hashedPassword,
      role: 'normal',
      createdAt,
      updatedAt,
    });
  }
  return { data: users };
};

module.exports = {
  up: async (queryInterface) => {
    let { data } = await generateUsers();
    await queryInterface.bulkInsert('users', data, {});
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
