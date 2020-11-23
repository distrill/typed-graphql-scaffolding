import 'reflect-metadata';
import  { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { Container } from 'typedi';
import initDB from './lib/db';
import { StoreResolver } from './models/store/store_resolver';
import StoreModel from './models/store/store_model';
import UserModel from './models/user/user_model';

async function run() {
  const db = await initDB();
  Container.set({
    id: 'USER_MODEL',
    factory: () => new UserModel(db),
  });
  Container.set({
    id: 'STORE_MODEL',
    factory: () => new StoreModel(db),
  });
  const schema = await buildSchema({
    resolvers: [StoreResolver],
    container: Container,
  });

  const server = new ApolloServer({
    schema,
    playground: true,
  });

  const { url } = await server.listen(4000);
  console.log(`Server is running, graphQL playground available at ${url}`);
}

run();
