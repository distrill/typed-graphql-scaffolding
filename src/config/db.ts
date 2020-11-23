import path from 'path';

export default {
  client: 'sqlite3',
  connection: {
    filename: path.resolve('build', 'db.sqlite3'),
  }, 
  useNullAsDefault: true,
};
