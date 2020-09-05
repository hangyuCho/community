const express = require('express');
const commentController = require('../controllers/comment.controller');
const { isLoggedIn } = require('./middlewares/auth');
const { getCurrentPost } = require('./middlewares/post');
const { getCurrentComment, isCommentAuthor } = require('./middlewares/comment');
const router = express.Router({ mergeParams: true });

// /node_api/post/:postId/comment/create
router.post(
  '/create',
  isLoggedIn,
  getCurrentPost,
  commentController.createComment
);
// /node_api/post/:postId/comment/all
router.get('/all', getCurrentPost, commentController.getCommentList);
// /node_api/post/:postId/comment/:commentId/edit
router.put(
  '/:commentId/edit',
  isLoggedIn,
  getCurrentPost,
  getCurrentComment,
  isCommentAuthor,
  commentController.editComment
);
// /node_api/post/:postId/comment/:commentId/delete
router.delete(
  '/:commentId/delete',
  isLoggedIn,
  getCurrentPost,
  getCurrentComment,
  isCommentAuthor,
  commentController.deleteComment
);

module.exports = router;
