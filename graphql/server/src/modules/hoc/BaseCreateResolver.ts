import { Arg, ClassType, Mutation, Resolver, UseMiddleware } from 'type-graphql';
import { Middleware } from 'type-graphql/dist/interfaces/Middleware';

function baseCreateResolver<T extends ClassType, X extends ClassType>(
  suffix: string,
  returnType: T,
  inputType: X,
  entity: any,
  middleware?: Middleware<any>[],
) {
  @Resolver()
  class BaseResolver {
    @Mutation(() => returnType, { name: `create${suffix}` })
    @UseMiddleware(...(middleware || []))
    async create(@Arg('input', () => inputType) input: any) {
      return entity.create(input).save();
    }
  }
  return BaseResolver;
}

export default baseCreateResolver;
