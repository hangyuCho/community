const expressAsyncHandler = require('express-async-handler');
const { findPostById } = require('../../services/post.service');

module.exports.getCurrentPost = expressAsyncHandler(async (req, res, next) => {
  const { post } = await findPostById({ postId: req.params.postId });
  if (!post) {
    return res.status(403).json('포스트가 존재하지 않습니다. ');
  }
  req.post = post;
  next();
});

module.exports.isPostAuthor = expressAsyncHandler(async (req, res, next) => {
  if (req.post.UserId !== req.user.id) {
    return res.status(401).json('포스트 작성자가 아닙니다.');
  }
  next();
});
