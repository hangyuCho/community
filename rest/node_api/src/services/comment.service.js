const { User, Comment } = require('../db/models');

module.exports.findCommentList = async ({ postId }) => {
  const commentListRecord = await Comment.findAll({
    where: {
      PostId: parseInt(postId, 10),
    },
    include: [
      {
        model: User,
        attributes: ['id', 'username'],
      },
    ],
    order: [
      ['id', 'DESC'],
      ['updatedAt', 'DESC'],
    ],
  });
  return { commentList: commentListRecord };
};

module.exports.findCommentById = async ({ commentId }) => {
  const commentRecord = await Comment.findOne({
    where: {
      id: commentId,
    },
    include: [
      {
        model: User,
        attributes: ['id', 'username'],
      },
    ],
  });
  return { comment: commentRecord };
};

module.exports.createComment = async ({ requestBody, UserId, PostId }) => {
  const commentRecord = await Comment.create({
    ...requestBody,
    UserId,
    PostId,
  });
  return { comment: commentRecord };
};

module.exports.updateCommentById = async ({ requestBody, commentId }) => {
  const commentRecord = await Comment.update(requestBody, {
    where: {
      id: commentId,
    },
    logging: true,
  });
  return { comment: commentRecord };
};
