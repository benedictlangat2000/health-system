//routes/enrolment.js
const Enrollment = require('../models/Enrollment.cjs');

module.exports = app => {
  app.post('/api/enroll', async (req, res) => {
    const { clientId, programIds } = req.body;

    if (!clientId || !Array.isArray(programIds) || programIds.length === 0) {
      return res.status(400).send({ error: 'Missing or invalid clientId/programIds' });
    }

    try {
      for (const programId of programIds) {
        await Enrollment.enrollClient({ client_id: clientId, program_id: programId }, () => {});
      }
      res.send({ message: 'Client enrolled in selected programs' });
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: 'Failed to enroll client' });
    }
  });

  // GET route to fetch the total number of enrollments
  app.get('/api/enroll', async (_req, res) => {
    try {
      const enrollments = await Enrollment.getAllEnrollments();
      console.log('Enrollments received in route:', enrollments);
      res.json({ total: enrollments.length });
    } catch (error) {
      console.error('Error fetching enrollments:', error);
      res.status(500).send({ error: 'Failed to fetch enrollments count' });
    }
  });
  
};
