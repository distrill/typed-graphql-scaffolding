import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export default class User {

  @Field(type => ID)
  id: string;

  @Field()
  username: string;
}
