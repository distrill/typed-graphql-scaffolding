module.exports = {
  up : async (knex) => {
    await knex.schema.createTable('user', table => {
      table.uuid('id').primary();
      table.string('username');
    });

    await knex.schema.createTable('store', table => {
      table.uuid('id').primary();
      table.uuid('user_id');
      table.string('name');

      table
        .foreign('user_id')
        .references('user.id');
    });

    await knex.schema.createTable('product', table => {
      table.uuid('id').primary();
      table.uuid('store_id');
      table.string('name');
      table.text('description');
      table.integer('price');
      table.integer('quantity');

      table
        .foreign('store_id')
        .references('store.id');
    });

    await knex.schema.createTable('customer', table => {
      table.uuid('id').primary();
      table.boolean('is_guest');
      table.string('name');
      table.string('address');
    });

    await knex.schema.createTable('order', table => {
      table.uuid('id').primary(); 
      table.uuid('store_id');
      table.uuid('customer_id');

      table
        .foreign('store_id')
        .references('store.id');

      table
        .foreign('customer_id')
        .references('customer.id');
    });

    await knex.schema.createTable('order_product', table => {
      table.uuid('id').primary();
      table.uuid('product_id');
      table.uuid('order_id');

      table
        .foreign('product_id')
        .references('product.id');

      table
        .foreign('order_id')
        .references('order.id');
    });
  },

  down:  async (knex) => {
    await knex.schema.dropTable('order_product');
    await knex.schema.dropTable('order');
    await knex.schema.dropTable('customer');
    await knex.schema.dropTable('product');
    await knex.schema.dropTable('store');
    await knex.schema.dropTable('user');
  },
};
