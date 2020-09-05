const bcrypt = require('bcryptjs');

module.exports.generateHashedPassword = async (password, next) => {
  try {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  } catch (err) {
    console.err(err);
    if (next) {
      next(err);
    }
  }
};
