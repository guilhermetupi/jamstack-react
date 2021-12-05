const express = require('express');
const { randomBytes } = require('crypto');

const app = express();

const peepBySquawkId = {};

app.use(express.json());

app.post('/birdsquawk/:id/peep', (req, res) => {
  const peepId = randomBytes(8).toString('hex');
  const { peep } = req.body;
  const peeps = peepBySquawkId[req.params.id] || [];

  peeps.push({ peepId, peep });

  peepBySquawkId[req.params.id] = peeps;

  res.status(201).json(peepBySquawkId[req.params.id]);
});

app.get('/birdsquawk/:id/peep', (req, res) => {
  res.status(201).json(peepBySquawkId[req.params.id]);
});

app.listen(5001, () => console.log('Server started on port 5001 🔥'));
