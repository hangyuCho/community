const { Category } = require('../db/models');

module.exports.createCategory = async ({ requestBody }) => {
  const categoryRecord = await Category.create(requestBody);
  return { category: categoryRecord };
};

module.exports.findCategoryList = async () => {
  const categoryListRecord = await Category.findAll({
    order: [
      ['id', 'DESC'],
      ['updatedAt', 'DESC'],
    ],
  });
  return { categoryList: categoryListRecord };
};

module.exports.findCategoryById = async ({ categoryId }) => {
  const categoryRecord = await Category.findOne({
    where: {
      id: categoryId,
    },
  });
  return { category: categoryRecord };
};
