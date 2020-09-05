import { MiddlewareFn } from 'type-graphql';
import { MyContext } from '../../types/MyContext';

export const isNotLoggedIn: MiddlewareFn<MyContext> = async ({ context }, next) => {
  if (!context.req.isAuthenticated()) {
    return next();
  } else {
    throw new Error('이미 로그인하셨습니다.');
  }
};
