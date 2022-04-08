const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Questão 01
const addShift = (lesson, key, shift) => {
  lesson[key] = shift;
  return lesson;
};
// console.log(addShift(lesson2, 'turno', 'noite'));

// Questão 02
const listLessonKeys = (lesson) => Object.keys(lesson);
// console.log(listLessonKeys(lesson1));

// Questão 03
const lessonSize = (lesson) => Object.keys(lesson).length
// console.log(lessonSize(lesson3));

// Questão 04
const lessonValues = (lesson) => Object.values(lesson)
// console.log(lessonValues(lesson1));

// Questão 05
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
// console.log(allLessons);

// Questão 06
const getStudentsNumber = (obj) => {
  const lessons = Object.keys(obj);
  let studentsNumber = 0;

  for (let i = 0; i < lessons.length; i += 1) {
    studentsNumber += obj[lessons[i]].numeroEstudantes;
  }

  return studentsNumber;
};
// console.log(getStudentsNumber(allLessons));

// Questão 07
const getKeyValue = (lesson, number) => Object.values(lesson)[number];
// console.log(getKeyValue(lesson2, 2));

// Questão 08
const verifyKeyValue = (lesson, key, value) => {
  const entries = Object.entries(lesson);
  let answer = false;

  for (let i = 0; i < entries.length; i += 1) {
    if(entries[i][0] === key && entries[i][1] === value) answer = true;
  }

  return answer;
};
console.log(verifyKeyValue(lesson1, 'turno', 'manhã'));