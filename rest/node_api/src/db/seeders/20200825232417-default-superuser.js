'use strict';
const { generateHashedPassword } = require('../../helper/auth');

module.exports = {
  up: async (queryInterface) => {
    const hashedPassword = await generateHashedPassword('1234');
    await queryInterface.bulkInsert(
      'users',
      [
        {
          username: '짬뽕',
          email: 'admin@gmail.com',
          role: 'admin',
          password: hashedPassword,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
