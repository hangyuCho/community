const express = require('express');
const categoryController = require('../controllers/category.controller');
const { isLoggedIn } = require('./middlewares/auth');
const router = express.Router({ mergeParams: true });

// /node_api/post/category/create
router.post('/create', isLoggedIn, categoryController.createCatrgory);
// /node_api/post/category/all
router.get('/all', categoryController.getCatrgoryList);
// /node_api/post/category/:categoryId/delete
router.delete(
  '/:categoryId/delete',
  isLoggedIn,
  categoryController.deleteCatrgory
);

module.exports = router;
