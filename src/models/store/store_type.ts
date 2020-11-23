import { ObjectType, Field, ID } from 'type-graphql';
import User from '../user/user_type';

@ObjectType()
export default class Store {

  @Field(type => ID)
  id: string;

  @Field(type => ID)
  userId: string;

  @Field()
  name: string;

  @Field()
  user: User;
}
