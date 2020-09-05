const expressAsyncHandler = require('express-async-handler');
const {
  findCategoryList,
  createCategory,
  findCategoryById,
} = require('../services/category.service');

module.exports.createCatrgory = expressAsyncHandler(async (req, res) => {
  const { category } = await createCategory({ requestBody: req.body });
  res.status(201).json(category);
});

module.exports.getCatrgoryList = expressAsyncHandler(async (req, res) => {
  const { categoryList } = await findCategoryList();
  res.status(200).json(categoryList);
});

module.exports.deleteCatrgory = expressAsyncHandler(async (req, res) => {
  const { category } = await findCategoryById({
    categoryId: req.params.categoryId,
  });
  if (!category) {
    return res.status(403).json('카테고리를 찾을 수 없습니다. ');
  }
  await category.destroy();
  res.status(200).json(parseInt(req.params.categoryId, 10));
});
