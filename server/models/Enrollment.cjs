//models/Enrollment.js
const knex = require('../db.cjs'); // Proper Knex import

const Enrollment = {
  enrollClient: (data, callback) => {
    knex('enrollments')
      .insert({
        client_id: data.client_id,
        program_id: data.program_id
      })
      .then(result => callback(null, result))
      .catch(err => callback(err));
  },

  getAllEnrollments: async () => {
    try {
      const query = knex('enrollments').select('*');
      const enrollments = await query;
      return enrollments;
    } catch (error) {
      console.error('Error in getAllEnrollments:', error);
      throw error;
    }
  }
};

module.exports = Enrollment;