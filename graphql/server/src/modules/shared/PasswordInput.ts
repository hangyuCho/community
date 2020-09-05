import { MinLength } from 'class-validator';
import { Field, InputType, ClassType, ObjectType } from 'type-graphql';

export const PasswordMixin = <T extends ClassType>(BaseClass: T) => {
  @ObjectType({ isAbstract: true })
  @InputType({ isAbstract: true })
  class PasswordInput extends BaseClass {
    @Field()
    @MinLength(5)
    password: string;
  }
  return PasswordInput;
};
