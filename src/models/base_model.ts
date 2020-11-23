import BhBaseModel from 'bh-modelbase';

export default class BaseModel<T> extends BhBaseModel<T> {
  constructor(db, table) {
    super(db, table);
  }
}
