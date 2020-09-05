import { Resolver, Mutation, Arg, Ctx } from 'type-graphql';
import bcrypt from 'bcryptjs';
import { User } from '../../entity/User';
import { RegisterInput } from './register/RegisterInput';
import { MyContext } from '../../types/MyContext';
import logger from '../../utils/logger';

@Resolver()
export class RegisterResolver {
  @Mutation(() => User)
  async register(
    @Arg('input')
    { username, email, password }: RegisterInput,
    @Ctx() context: MyContext,
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    }).save();
    context.req.login(user, (err) => {
      if (err) {
        logger.error(err);
      }
      logger.info('로그인되었습니다.');
    });
    return user;
  }
}
