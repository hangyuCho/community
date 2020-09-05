const { Notice, User } = require('../db/models');

module.exports.findNoticeList = async ({ offset, limit }) => {
  const noticeListRecord = await Notice.findAll({
    include: [
      {
        model: User,
        attributes: ['id', 'username', 'email'],
      },
    ],
    offset,
    limit,
    order: [
      ['id', 'DESC'],
      ['updatedAt', 'DESC'],
    ],
  });
  return { noticeList: noticeListRecord };
};

module.exports.findNoticeById = async ({ noticeId }) => {
  const noticeRecord = await Notice.findOne({
    where: {
      id: noticeId,
    },
    include: [
      {
        model: User,
        attributes: [
          'id',
          'username',
          'email',
          'github',
          'facebook',
          'twitter',
        ],
      },
    ],
  });
  return { notice: noticeRecord };
};

module.exports.createNotice = async ({ UserId, requestBody }) => {
  const noticeRecord = await Notice.create({
    UserId,
    ...requestBody,
  });
  return { notice: noticeRecord };
};

module.exports.updateNoticeById = async ({ requestBody, noticeId }) => {
  const noticeRecord = await Notice.update(requestBody, {
    where: {
      id: noticeId,
    },
    logging: true,
  });
  return { notice: noticeRecord };
};
