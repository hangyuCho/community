const expressAsyncHandler = require('express-async-handler');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const {
  findPostById,
  findPostList,
  createPost,
  updatePostById,
} = require('../services/post.service');

module.exports.createPost = expressAsyncHandler(async (req, res) => {
  const { post: newPost } = await createPost({
    UserId: req.user.id,
    requestBody: req.body,
  });
  res.status(201).json(newPost);
});

module.exports.getPostList = expressAsyncHandler(async (req, res) => {
  const cursor = req.query.cursor;
  const limit = parseInt(req.query.limit, 10) || 5;
  const CategoryId = req.query.CategoryId;
  const title = req.query.title;
  let query = {};

  if (cursor) {
    query['where'] = {
      ...query.where,
      id: {
        [Op.lt]: cursor,
      },
    };
  }

  if (CategoryId) {
    query['where'] = {
      ...query.where,
      CategoryId,
    };
  }

  if (title) {
    query['where'] = {
      ...query.where,
      title: {
        [Op.like]: '%' + title + '%',
      },
    };
  }

  query = { ...query, limit: limit + 1 };

  let { postList } = await findPostList({ query });
  const hasNextPage = postList.length > limit;
  postList = hasNextPage ? postList.slice(0, -1) : postList;
  res.status(200).json({
    postList,
    pageInfo: {
      nextPageCursor: hasNextPage ? postList[postList.length - 1].id : null,
      hasNextPage,
    },
  });
});

module.exports.getPost = expressAsyncHandler(async (req, res) => {
  const post = req.post;
  await post.increment('view', { by: 1 });
  const { post: result } = await findPostById({ postId: req.params.postId });
  req.post = null;
  res.status(200).json(result);
});

module.exports.editPost = expressAsyncHandler(async (req, res) => {
  await updatePostById({ requestBody: req.body, id: req.params.postId });
  const { post: result } = await findPostById({ postId: req.params.postId });
  req.post = null;
  res.status(200).json(result);
});

module.exports.deletePost = expressAsyncHandler(async (req, res) => {
  const post = req.post;
  await post.destroy();
  req.post = null;
  res.status(200).json(parseInt(req.params.postId, 10));
});

module.exports.likePost = expressAsyncHandler(async (req, res) => {
  const post = req.post;
  await post.addLikers(req.user.id);
  req.post = null;
  res.status(200).json({ UserId: req.user.id });
});

module.exports.unLikePost = expressAsyncHandler(async (req, res) => {
  const post = req.post;
  await post.removeLikers(req.user.id);
  req.post = null;
  res.status(200).json({ UserId: req.user.id });
});
