const { User } = require('../db/models');

module.exports.findUserById = async ({ userId }) => {
  const userRecord = await User.findOne({
    where: {
      id: userId,
    },
  });
  return { user: userRecord };
};

module.exports.findUserByEmail = async ({ email }) => {
  const userRecord = await User.findOne({
    where: {
      email,
    },
  });
  return { user: userRecord };
};

module.exports.createUser = async ({ requestBody }) => {
  const userRecord = await User.create(requestBody);
  return { user: userRecord };
};
