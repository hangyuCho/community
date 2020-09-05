const expressAsyncHandler = require('express-async-handler');
const { findCommentById } = require('../../services/comment.service');

module.exports.getCurrentComment = expressAsyncHandler(
  async (req, res, next) => {
    const { comment } = await findCommentById({
      commentId: req.params.commentId,
    });
    if (!comment) {
      return res.status(403).json('포스트 댓글을 찾을 수 없습니다. ');
    }
    req.comment = comment;
    next();
  }
);

module.exports.isCommentAuthor = expressAsyncHandler(async (req, res, next) => {
  if (req.comment.UserId !== req.user.id) {
    return res.status(401).json('댓글 작성자가 아닙니다.');
  }
  next();
});
