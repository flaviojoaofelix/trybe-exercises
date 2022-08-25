const fs = require('fs').promises;

const read = async () => {
  const file = await fs.readFile('./simpsons.json', 'utf-8');
  const content = JSON.parse(file);

  const characters = content.map((character) => `${character.id} - ${character.name}`);

  characters.forEach((character) => console.log(character));
};

const readById = async (id) => {
  const file = await fs.readFile('./simpsons.json', 'utf-8');
  const content = JSON.parse(file);

  const characterById = content.find((character) => Number(character.id) === id);

  if (!characterById) {
    throw new Error('ID não encontrado!')
  }

  return characterById;
}

const filterAndWrite = async () => {
  const file = await fs.readFile('./simpsons.json', 'utf-8');
  const content = JSON.parse(file);

  const charactersFiltered = content.filter((character) => character.id !== '10' && character.id !== '6');

  await fs.writeFile('./simpsons.json', JSON.stringify(charactersFiltered));
};

const createFamily = async () => {
  const file = await fs.readFile('./simpsons.json', 'utf-8');
  const content = JSON.parse(file);

  const family = [1, 2, 3, 4];
  const simpsons = content.filter((character) => family.includes(Number(character.id)));

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsons))
};

const addToFamily = async (id, name) => {
  const file = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const content = JSON.parse(file);

  content.push({ id, name });

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(content));
};

const replaceFamilyMember = async (targetId, id, name) => {
  const file = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const content = JSON.parse(file);

  const filtered = content.filter((character) => character.id !== targetId);
  // const familyWithNewMember = filtered.concat([{ id, name }]);
  const familyWithNewMember = [ ...filtered, { id, name } ];


  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(familyWithNewMember));
};

const main = async () => {
  await read();

  // const characterById = await readById(1);
  // console.log(characterById);

  // await filterAndWrite();
  // await read();

  // createFamily();

  // addToFamily('8', 'Nelson Muntz');

  replaceFamilyMember('8', '11', 'Maggie Simpson');
}

main();