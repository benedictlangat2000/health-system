const faker = require('faker');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('clients')
    .del()
    .then(() => {
      // Insert seed entries
      const clients = Array.from({ length: 10 }).map(() => ({
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        email: faker.internet.email(),
        phone_number: faker.phone.phoneNumber(),
        address: faker.address.streetAddress(),
        age: faker.datatype.number({ min: 18, max: 99 }),
        gender: faker.name.gender(),
        created_at: faker.date.past(),
        updated_at: faker.date.recent(),
      }));

      return knex('clients').insert(clients);
    });
};
