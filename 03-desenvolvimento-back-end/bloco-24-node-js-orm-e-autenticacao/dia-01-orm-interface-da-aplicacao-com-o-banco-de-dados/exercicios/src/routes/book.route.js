const express = require('express');
const routes = express.Router();

const bookController = require('../controllers/book.controller');

routes.get('/', bookController.getAll);
routes.get('/:id', bookController.getById);

module.exports = routes;