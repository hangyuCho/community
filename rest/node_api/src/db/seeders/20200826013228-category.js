'use strict';
const faker = require('faker');

const generateCategories = async () => {
  let categories = [];
  for (let i = 0; i <= 5; i++) {
    let name = faker.lorem.word();
    let createdAt = faker.date.between('2020-01-01', '2020-08-26');
    let updatedAt = faker.date.between('2020-01-01', '2020-08-26');
    categories.push({
      name,
      createdAt,
      updatedAt,
    });
  }
  return { data: categories };
};

module.exports = {
  up: async (queryInterface) => {
    try {
      let { data: categories } = await generateCategories();
      await queryInterface.bulkInsert('categories', categories, {});
    } catch (err) {
      console.error(err);
    }
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('categories', null, {});
  },
};
