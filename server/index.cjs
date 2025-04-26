// server/index.cjs
const express = require('express');
const cors = require('cors');
const { json } = require('body-parser');
require('dotenv').config();
const apiKey = process.env.API_KEY;

const app = express();
app.use(cors());
app.use(json());

require('./routes/clients.cjs')(app);
require('./routes/programs.cjs')(app);
require('./routes/enrollments.cjs')(app);

app.listen(5000, () => console.log('Server running on port 5000'));
