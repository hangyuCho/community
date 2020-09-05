import { Ctx, Mutation, UseMiddleware } from 'type-graphql';
import { isLoggedIn } from '../middleware/isLoggedIn';
import { MyContext } from '../../types/MyContext';

export class LogoutResolver {
  @UseMiddleware(isLoggedIn)
  @Mutation(() => String)
  async logout(@Ctx() context: MyContext) {
    context.logout();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    context.req.session.destroy();
    return '로그아웃 되었습니다. ';
  }
}
