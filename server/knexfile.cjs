// knexfile.cjs
module.exports = {
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'health-system',
    port: process.env.DB_PORT || 3306
  },
  migrations: {
    directory: './migrations'
  },
  seeds: {
    extension: 'cjs',
      directory: './seeds'
  }
};
