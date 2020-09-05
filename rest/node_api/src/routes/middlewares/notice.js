const expressAsyncHandler = require('express-async-handler');
const { findNoticeById } = require('../../services/notice.service');

module.exports.getCurrentNotice = expressAsyncHandler(
  async (req, res, next) => {
    // notice 찾기
    const { notice } = await findNoticeById({ noticeId: req.params.noticeId });
    if (!notice) {
      return res.status(403).json('Notice가 존재하지 않습니다. ');
    }
    req.notice = notice;
    next();
  }
);

module.exports.isNoticeAuthor = expressAsyncHandler(async (req, res, next) => {
  if (req.notice.UserId !== req.user.id) {
    return res.status(401).json('Notice 작성자가 아닙니다.');
  }
  next();
});
