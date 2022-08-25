const express = require('express');
const validateName = require('./middlewares/validateName');
const validatePrice = require('./middlewares/validatePrice');
const validateDescription = require('./middlewares/validateDescription');
const validateCreatedAt = require('./middlewares/validateCreatedAt');
const validateRating = require('./middlewares/validateRating');
const validateDifficulty = require('./middlewares/validateDifficulty');
const validateSignup = require('./middlewares/validateSignup');
const generateToken = require('./utils/generateToken');

const app = express();

app.use(express.json());

app.post('/activities',
  validateDifficulty,
  validateRating,
  validateCreatedAt,
  validateDescription,
  validatePrice,
  validateName,
  (_req, res) => {
    res.status(201).json({ message: 'Atividade registrada com sucesso!' });
});

app.post('/signup', validateSignup, (_req, res) => {
  const token = generateToken();

  return res.status(200).json({ token });
});

module.exports = app;
