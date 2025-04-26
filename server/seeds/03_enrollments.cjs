const faker = require('faker');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('enrollments')
    .del()
    .then(() => {
      // Get existing clients and programs
      return knex('clients')
        .select('id')
        .then(clients => {
          return knex('programs')
            .select('id')
            .then(programs => {
              // Generate random enrollments
              const enrollments = Array.from({ length: 10 }).map(() => ({
                client_id: faker.random.arrayElement(clients).id,
                program_id: faker.random.arrayElement(programs).id,
                created_at: faker.date.past(),
                updated_at: faker.date.recent(),
              }));

              // Insert the generated enrollments
              return knex('enrollments').insert(enrollments);
            });
        });
    });
};
