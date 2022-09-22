const { book } = require('../models');

const getAll = async () => {
  const books = await book.findAll();

  return books;
};

const getById = async (id) => {
  console.log(id);
  const books = await book.findByPk(id);
  
  return books;
};

module.exports = {
  getAll,
  getById,
};