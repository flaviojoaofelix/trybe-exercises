const express = require('express');

const app = express();
app.use(express.json());

const bookRoutes = require('./routes/book.route');


app.use('/books', bookRoutes);

module.exports = app;