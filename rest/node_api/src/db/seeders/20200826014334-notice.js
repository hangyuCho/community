'use strict';
const faker = require('faker');

const generateNoticeList = async ({ UserIds }) => {
  let notices = [];
  for (let i = 0; i <= 99; i++) {
    let title = faker.lorem.sentence();
    let desc = faker.lorem.paragraph();
    let view = faker.random.number();
    let userRanNum = Math.floor(Math.random() * Math.floor(UserIds.length));
    let createdAt = faker.date.between('2020-01-01', '2020-08-26');
    let updatedAt = faker.date.between('2020-01-01', '2020-08-26');
    notices.push({
      title,
      desc,
      view,
      UserId: UserIds[userRanNum].id,
      createdAt,
      updatedAt,
    });
  }
  return { data: notices };
};

module.exports = {
  up: async (queryInterface) => {
    try {
      const findUsers = await queryInterface.sequelize.query(
        'SELECT id from users;'
      );
      const UserIds = findUsers[0];
      let { data: notices } = await generateNoticeList({ UserIds });
      await queryInterface.bulkInsert('notices', notices, {});
    } catch (err) {
      console.error(err);
    }
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('notices', null, {});
  },
};
