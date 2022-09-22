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

const create = async (title, author, pageQuantity) => {
  const newBook = await book.create({ title, author, pageQuantity });

  return newBook;
};

const update = async (id, title, author, pageQuantity) => {
  const [updated] = await book.update(
    { title, author, pageQuantity },
    { where: { id } },
  );

  return updated;
};

const remove = async (id) => {
  const books = await book.destroy(
    { where: { id } },
  );

  return books;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};