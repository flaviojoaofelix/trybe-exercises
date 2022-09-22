const { book } = require('../models');

const getAll = async () => {
  const books = await book.findAll();

  return books;
};

const getById = async (id) => {
  const book = await book.findByPk(id);

  return book;
};

module.exports = {
  getAll,
  getById,
};