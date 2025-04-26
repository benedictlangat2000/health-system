// server/db.cjs
const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'health-system',
  },
  pool: { min: 0, max: 10 } // Optional: connection pool configuration
});

module.exports = knex;