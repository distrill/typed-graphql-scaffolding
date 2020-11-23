import BaseModel from '../base_model';
import User from './user_type';

export default class StoreModel extends BaseModel<User> {
  constructor(db) {
    const table = 'user';
    super(db, table);
  }
}
