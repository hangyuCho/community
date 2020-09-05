import { ApolloServer } from 'apollo-server-express';
import Express from 'express';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { createSchema } from './utils/createSchema';
import { buildContext } from 'graphql-passport';
import initPassport from './initPassport';
import { User } from './entity/User';
import logger from './utils/logger';
import starter from './starter';

const main = async () => {
  await createConnection();

  const schema = await createSchema();
  initPassport({ User });

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }) => buildContext({ req, res, User }),
    playground: {
      settings: {
        'request.credentials': 'same-origin',
      },
    },
  });

  const app = Express();

  starter(app);

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(4000, () => {
    logger.info(`🚀 Server ready at http://localhost:${4000}${apolloServer.graphqlPath}`);
  });
};

main().catch((err) => console.error(err));
