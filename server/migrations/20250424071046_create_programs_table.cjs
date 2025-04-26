exports.up = function(knex) {
    return knex.schema.createTable('programs', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('description');
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('programs');
  };
  