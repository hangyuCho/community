import cors from 'cors';
import morgan from 'morgan';
import session from 'express-session';
import passport from 'passport';
import { Express } from 'express';
import { COOKIE_SECRET } from './env';
import cookieParser from 'cookie-parser';
import { v4 } from 'uuid';

// const isProd = NODE_ENV === 'production';

const options = {
  corsOptions: {
    origin: ['http://localhost:6006', 'http://localhost:3000'],
    credentials: true,
  },
  sessionOptions: {
    genid: () => v4(),
    saveUninitialized: false,
    resave: false,
    secret: COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
      // node_api.tamastudy.com <-> tamastudy.com 간에 쿠키 공유가 될것이다.
      // domain: isProd ? '.tamastudy.com' : 'localhost',
      maxAge: 1000 * 60, // 1 hour
    },
  },
};

export default (app: Express) => {
  app.use(cookieParser(COOKIE_SECRET));
  app.use(cors(options.corsOptions));
  app.use(morgan('dev'));
  app.use(session(options.sessionOptions));
  app.use(passport.initialize());
  app.use(passport.session());
};
