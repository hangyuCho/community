import { Resolver, Mutation, Arg, Ctx, UseMiddleware } from 'type-graphql';
import { User } from '../../entity/User';
import { LoginInput } from './login/LoginInput';
import { isNotLoggedIn } from '../middleware/isNotLoggedIn';
import { MyContext } from '../../types/MyContext';

@Resolver()
export class LoginResolver {
  @UseMiddleware(isNotLoggedIn)
  @Mutation(() => User)
  async login(
    @Arg('input')
    { email, password }: LoginInput,
    @Ctx() context: MyContext,
  ): Promise<User> {
    const { user } = await context.authenticate('graphql-local', {
      email,
      password,
    });
    context.login(user);
    return user;
  }
}
