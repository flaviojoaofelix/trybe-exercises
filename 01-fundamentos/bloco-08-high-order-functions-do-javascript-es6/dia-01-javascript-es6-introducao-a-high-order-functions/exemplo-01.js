const wakeUp = () => `Acordando!!`;
const drinkCofee = () => `Bora tomar café!!`;
const goSleep = () => `Partiu dormir!!`;

// Ao chamar a função doingThings:
const doingThings = (callback) => console.log(callback());

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!
doingThings(wakeUp);
doingThings(drinkCofee);
doingThings(goSleep);