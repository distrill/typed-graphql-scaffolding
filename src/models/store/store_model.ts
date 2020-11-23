import { Service } from 'typedi';
import Store from './store_type';
import BaseModel from '../base_model';

export default class StoreModel extends BaseModel<Store> {
  constructor(db) {
    const table = 'store';
    super(db, table);
  }
}
