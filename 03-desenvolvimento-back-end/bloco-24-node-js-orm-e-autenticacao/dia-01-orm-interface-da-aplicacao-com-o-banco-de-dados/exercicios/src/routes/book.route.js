const express = require('express');
const routes = express.Router();

const bookController = require('../controllers/book.controller');

routes.get('/', bookController.getAll);

module.exports = routes;