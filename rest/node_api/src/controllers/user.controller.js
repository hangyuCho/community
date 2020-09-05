const asyncHandler = require('express-async-handler');
const passport = require('passport');
const { generateHashedPassword } = require('../helper/auth');

const {
  findUserByEmail,
  createUser,
  findUserById,
} = require('../services/user.service');

module.exports.signUp = asyncHandler(async (req, res, next) => {
  const { user } = await findUserByEmail({ email: req.body.email });
  if (user) {
    return res.status(401).json('이미 유저가 존재합니다. ');
  }
  const hashedPassword = await generateHashedPassword(req.body.password, next);
  await createUser({
    requestBody: { ...req.body, password: hashedPassword },
  });
  res.status(201).json('회원가입이 완료되었습니다.');
});

module.exports.logIn = asyncHandler(async (req, res, next) => {
  passport.authenticate('local', {}, (err, user, info) => {
    if (err) {
      console.error(err);
      next(err);
    }
    if (info) {
      return res.status(401).json(info.reason);
    }
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      const { user: existingUser } = await findUserById({ userId: user.id });
      return res.status(200).json(existingUser);
    });
  })(req, res);
});

module.exports.logOut = asyncHandler(async (req, res) => {
  req.logout();
  req.session.destroy();
  res.status(200).json('로그아웃이 완료되었습니다. ');
});

module.exports.loadMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

// TODO
module.exports.loadUser = (req, res) => {
  console.log('loadUser 완료');
  res.status(200).json({
    id: 1,
    msg: true,
  });
};
