const faker = require('faker');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('programs')
    .del()
    .then(() => {
      // Insert seed entries
      const programs = Array.from({ length: 10 }).map(() => ({
        name: faker.company.bs(),
        description: faker.lorem.sentences(),
        created_at: faker.date.past(),
        updated_at: faker.date.recent(),
      }));

      return knex('programs').insert(programs);
    });
};
