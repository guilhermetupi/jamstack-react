const express = require('express');
const { randomBytes } = require('crypto');

const app = express();

const squawkData = {};

app.use(express.json());

app.post('/birdsquawk', (req, res) => {
  const id = randomBytes(8).toString('hex');
  const { title } = req.body;
  squawkData[id] = { id, title };

  res.status(201).json(squawkData[id]);
});

app.listen(5000, () => console.log('Server started on port 5000 🔥'));
