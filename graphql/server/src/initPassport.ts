import passport from 'passport';
import { GraphQLLocalStrategy } from 'graphql-passport';
import bcrypt from 'bcryptjs';
import logger from './utils/logger';

const initPassport = ({ User }: any) => {
  passport.use(
    new GraphQLLocalStrategy(async (email: any, password: any, done: any) => {
      try {
        const user = await User.findOne({ where: { email } });
        if (!user) return done(new Error('유저를 찾을 수 없습니다. '), false);
        const isMatchedPassword = await bcrypt.compare(password, user.password);
        isMatchedPassword ? done(null, user) : done(new Error('패스워드가 일치하지 않습니다. '), false);
      } catch (error) {
        logger.error(error);
        return done(error);
      }
    }),
  );

  passport.serializeUser((user: any, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({ where: { id } });
      done(null, user);
    } catch (error) {
      logger.error(error);
      done(error);
    }
  });
};

export default initPassport;
