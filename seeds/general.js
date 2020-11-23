const { v4: uuid } = require('uuid');

const FULL_RESET = true;

exports.seed = async (knex) => {
  const users = [
    {id: uuid(), username: 'brent'},
  ];

  const stores = [
    {id: uuid(), user_id: users[0].id, name: 'FOUR MORE'},
    {id: uuid(), user_id: users[0].id, name: 'He Must Be Stopped'},
  ];

  console.log('resetting database');
  await knex.migrate.rollback({}, FULL_RESET);
  console.log('migrating latest');
  await knex.migrate.latest();

  console.log('inserting seed data');
  await knex('user').insert(users);
  await knex('store').insert(stores);
};
