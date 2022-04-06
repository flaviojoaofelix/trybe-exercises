const techList = (arr, name) => {
  if (arr.length === 0) return 'Vazio!';

  const sortedList =  arr.sort();
  const techList = [];

  for (let i = 0; i < sortedList.length; i += 1) {
    techList.push({
      tech: sortedList[i],
      name
    })
  }

  return techList;
}

module.exports = techList;