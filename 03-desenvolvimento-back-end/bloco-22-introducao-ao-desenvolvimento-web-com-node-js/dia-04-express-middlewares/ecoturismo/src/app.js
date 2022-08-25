const express = require('express');
const validateName = require('./middlewares/validateName');
const validatePrice = require('./middlewares/validatePrice');
const validateDescription = require('./middlewares/validateDescription');
const validateCreatedAt = require('./middlewares/validateCreatedAt');

const app = express();

app.use(express.json());

app.post('/activities',
  validateCreatedAt,
  validateDescription,
  validatePrice,
  validateName,
  (_req, res) => {
    res.status(201).json({ message: 'Atividade registrada com sucesso!' });
});

module.exports = app;
