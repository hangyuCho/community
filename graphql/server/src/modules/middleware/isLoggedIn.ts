import { MiddlewareFn } from 'type-graphql';
import { MyContext } from '../../types/MyContext';

export const isLoggedIn: MiddlewareFn<MyContext> = async ({ context }, next) => {
  if (context.req.isAuthenticated()) {
    return next();
  } else {
    throw new Error('인증 에러입니다. ');
  }
};
