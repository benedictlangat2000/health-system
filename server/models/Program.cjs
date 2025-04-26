const knex = require('../db.cjs');

const Program = {
  create: (data, callback) => {
    knex('programs')  // Use knex directly here
      .insert({
        name: data.name,
        description: data.description
      })
      .then(result => callback(null, result))
      .catch(err => callback(err));
  },

  findAll: callback => {
    knex('programs')
      .select('*')
      .then(rows => callback(null, rows))
      .catch(err => callback(err));
  }
};

module.exports = Program;
