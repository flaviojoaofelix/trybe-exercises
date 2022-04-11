const skills = ['HTML', 'CSS', 'JavaScript', 'DOM', 'Linux'];
const text = `Tryber x aqui!`;

const getSkills = (phrase, skills) => {
  const sortedSkills = skills.sort();
  return `${phrase} Minhas cinco principais habilidades são: ${sortedSkills}`
}

const makeText = (text, sub, skills) => {
  phrase = text.replace('x', sub)
  return getSkills(phrase, skills);
};

console.log(makeText(text, 'Bebeto', skills));
