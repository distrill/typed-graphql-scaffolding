import {
  Root,
  Resolver,
  ResolverInterface,
  FieldResolver,
  Query,
  Arg,
} from 'type-graphql';
import { Inject } from 'typedi';
import Store from './store_type';
import User from '../user/user_type';
import { QueryBuilder } from 'knex';

@Resolver(of => Store)
export class StoreResolver implements ResolverInterface<Store> {
  constructor(
    @Inject('STORE_MODEL')
    private storeModel,
    @Inject('USER_MODEL')
    private userModel
  ) {}

  @Query(returns => [Store])
  async stores(
    @Arg("userId") userId: string,
  ) {
    const stores = await this.storeModel.fetchAll({ userId });
    console.log('STORES', stores);
    return stores.map((store: typeof Store) => Object.assign(new Store(), store ));
  }

  @Query(returns => Store)
  async store(
    @Arg("id") id: string,
  ) {
    const store = await this.storeModel.fetchOne({ id });
    return Object.assign(new Store(), store);
  }

  @FieldResolver()
  async user(@Root() store: Store) {
    const user = await this.userModel.fetchOne({
      id: store.userId,
    })
    return Object.assign(new User(), user);
  }
}

