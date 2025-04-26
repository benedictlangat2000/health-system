// server/routes/clients.cjs
const { create, findAll, findByIdWithPrograms } = require('../models/Client.cjs');


const API_KEY = process.env.API_KEY; // Store this securely (e.g., environment variable)

module.exports = app => {
  app.post('/api/clients', (req, res) => {
    create(req.body, (err, results) => {
      if (err) return res.status(500).send(err);
      res.send({ id: results.insertId, message: 'Client registered' });
    });
  });

  app.get('/api/clients', (req, res) => {
    const { search = '', page = 1 } = req.query;
    const limit = 10;
    const offset = (parseInt(page) - 1) * limit;

    findAll(search, offset, limit, (err, clients) => {
      if (err) return res.status(500).send(err);
      res.send(clients);
    });
  });

  app.get('/api/clients/:id', (req, res) => {
    const apiKey = req.headers['x-api-key']; // Expecting the API key in the request header

    if (apiKey !== API_KEY) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    findByIdWithPrograms(req.params.id, (err, results) => {
      if (err) return res.status(500).send(err);
      if (!results) return res.status(404).send({ message: 'Client not found' });
      res.json(results);
    });
  });
};