exports.up = function(knex) {
  return knex.schema.createTable('clients', function(table) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('email').unique().notNullable();
    table.string('phone');
    table.string('address');
    table.integer('age');
    table.string('gender');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('clients');
};
