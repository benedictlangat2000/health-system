const knex = require('../db.cjs');

const Client = {
  create: (data, callback) => {
    knex('clients')
      .insert({
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        age: data.age,
        gender: data.gender
      })
      .then(result => callback(null, result))
      .catch(err => callback(err));
  },

  findAll: (search = '', offset = 0, limit = 10, callback) => {
    knex('clients')
      .where('phone', 'like', `%${search}%`)
      .orWhere('email', 'like', `%${search}%`)
      .offset(offset)
      .limit(limit)
      .select('*')
      .then(rows => callback(null, rows))
      .catch(err => callback(err));
  },

  findByIdWithPrograms: (id, callback) => {
    knex('clients as c')
      .leftJoin('enrollments as e', 'c.id', 'e.client_id')
      .leftJoin('programs as p', 'e.program_id', 'p.id')
      .select('c.*', 'p.name as program')
      .where('c.id', id)
      .then(rows => {
        if (!rows || rows.length === 0) {
          return callback(null, null); // Client not found
        }
  
        const client = { ...rows[0] }; // Start with the client's base info
        client.enrolledPrograms = rows
          .map(row => row.program)
          .filter(program => program !== null && program !== undefined)
          .filter((value, index, self) => self.indexOf(value) === index); // Remove duplicates
  
        // Remove the individual 'program' property
        delete client.program;
  
        callback(null, client);
      })
      .catch(err => callback(err));
  }
};

module.exports = Client;
