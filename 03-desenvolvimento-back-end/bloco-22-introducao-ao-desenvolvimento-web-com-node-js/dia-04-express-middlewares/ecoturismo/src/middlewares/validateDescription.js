// module.exports = (req, res, next) => {
//   const { description } = req.body;

//   if (!description) {
//     return res.status(400).json({
//       message: 'O campo description é obrigatório',
//     });
//   }

//   if (!description.createdAt) {
//     return res.status(400).json({
//       message: 'O campo createdAt é obrigatório',
//     });
//   }

//   if (!description.rating) {
//     return res.status(400).json({
//       message: 'O campo rating é obrigatório',
//     });
//   }

//   if (!description.difficulty) { 
//     return res.status(400).json({
//       message: 'O campo difficulty é obrigatório',
//     });
//   }

//   next();
// };
// A solução acima gera problema de excesso de linhas no LINT
// error  Arrow function has too many lines (29). Maximum allowed is 20  max-lines-per-function

const validateDescription = (descriptionValue, res, value) => {
  if (!descriptionValue) {
    return res.status(400).json(
      { message: `O campo ${value} é obrigatório` },
    );
  }
};

module.exports = (req, res, next) => {
  const { description } = req.body;

  return validateDescription(description, res, 'description')
    || validateDescription(description.createdAt, res, 'createdAt')
    || validateDescription(description.rating, res, 'rating')
    || validateDescription(description.difficulty, res, 'difficulty')
    || next();
};
