import { graphql, GraphQLSchema } from 'graphql';
import { buildContext } from 'graphql-passport';
import { Maybe } from 'graphql/jsutils/Maybe';
import { createSchema } from '../utils/createSchema';
import { User } from '../entity/User';
import { Request, Response } from 'express';

interface Options {
  source: string;
  variableValues: Maybe<{ [p: string]: any }>;
}

let schema: GraphQLSchema;

export const gCall = async ({ source, variableValues }: Options) => {
  if (!schema) {
    schema = await createSchema();
  }
  return graphql({
    schema,
    source,
    variableValues,
    contextValue: ({ req, res }: { req: Request; res: Response }) => buildContext({ req, res, User }),
  });
};
