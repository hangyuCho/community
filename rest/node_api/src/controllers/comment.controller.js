const expressAsyncHandler = require('express-async-handler');
const {
  createComment,
  findCommentById,
  findCommentList,
  updateCommentById,
} = require('../services/comment.service');

module.exports.createComment = expressAsyncHandler(async (req, res) => {
  const { comment } = await createComment({
    requestBody: req.body,
    UserId: req.user.id,
    PostId: req.post.id,
  });
  const { comment: result } = await findCommentById(comment.id);
  req.post = null;
  res.status(201).json(result);
});

module.exports.getCommentList = expressAsyncHandler(async (req, res) => {
  const { commentList: result } = await findCommentList({
    postId: req.params.postId,
  });
  req.post = null;
  res.status(200).json(result || []);
});

module.exports.editComment = expressAsyncHandler(async (req, res) => {
  await updateCommentById({
    requestBody: req.body,
    commentId: req.params.commentId,
  });
  const { comment: result } = await findCommentById({
    commentId: req.params.commentId,
  });
  req.post = null;
  req.comment = null;
  res.status(201).json(result);
});

module.exports.deleteComment = expressAsyncHandler(async (req, res) => {
  const comment = req.comment;
  await comment.destroy();
  req.post = null;
  req.comment = null;
  res.status(200).json(parseInt(req.params.commentId, 10));
});
