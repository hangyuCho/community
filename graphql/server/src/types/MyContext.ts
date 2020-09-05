import { Request as ExpressRequest } from 'express';
import { PassportContext } from 'graphql-passport';
import { User } from '../entity/User';

export interface Credentials {
  email: string;
  password: string;
}

export type MyContext = PassportContext<User, Credentials, {}, ExpressRequest>;
