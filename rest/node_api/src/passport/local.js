const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const bcrypt = require('bcryptjs');
const { findUserByEmail } = require('../services/user.service');

const comparePassword = async (inputPassword, hashedPassword) =>
  await bcrypt.compare(inputPassword, hashedPassword);

module.exports = () => {
  passport.use(
    'local',
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
      },
      async (email, password, done) => {
        try {
          const { user } = await findUserByEmail({ email });

          if (!user) {
            return done(null, false, { reason: '유저가 존재하지 않습니다. ' });
          }
          const result = await comparePassword(password, user.password);
          if (result) {
            return done(null, user);
          }
          return done(null, false, {
            reason: '패스워드가 일치하지 않습니다. ',
          });
        } catch (error) {
          console.error(error);
          return done(error);
        }
      }
    )
  );
};
