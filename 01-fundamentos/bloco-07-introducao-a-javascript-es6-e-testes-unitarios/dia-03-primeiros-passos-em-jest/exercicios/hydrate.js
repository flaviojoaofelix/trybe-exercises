const hydrate = (string) => {
  let beverages = 0;
  const split = string.split('');

  for (let i = 0; i < split.length; i += 1) {
    const parse = parseInt(split[i]);

    if (parse) {
      beverages += parse;
    }
  }

  let glasses;
  beverages > 1 ? glasses = 'copos' : glasses = 'copo';
  return `${beverages} ${glasses} de água`;
};

module.exports = hydrate;