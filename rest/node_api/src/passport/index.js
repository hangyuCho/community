const passport = require('passport');
const local = require('./local');
const { findUserById } = require('../services/user.service');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const { user } = await findUserById({ userId: id });
      done(null, user);
    } catch (error) {
      console.error(error);
      done(error);
    }
  });

  local();
};
