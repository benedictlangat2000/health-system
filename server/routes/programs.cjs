
const { create, findAll } = require('../models/Program.cjs');  // Use require() instead of import

module.exports = app => {  // Use module.exports instead of export default
  app.post('/api/programs', (req, res) => {
    create(req.body, (err) => {
      if (err) return res.status(500).send(err);
      res.send({ message: 'Program created' });
    });
  });

  app.get('/api/programs', (_req, res) => {
    findAll((err, programs) => {
      if (err) return res.status(500).send(err);
      res.send(programs);
    });
  });
};
