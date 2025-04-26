exports.up = function(knex) {
    return knex.schema.createTable('enrollments', function(table) {
      table.increments('id').primary();
      table.integer('client_id').unsigned().references('id').inTable('clients').onDelete('CASCADE');
      table.integer('program_id').unsigned().references('id').inTable('programs').onDelete('CASCADE');
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('enrollments');
  };
  