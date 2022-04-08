// Parte 01
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

///////////////////////////////////////////////////////////

const getDamage = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const dragonAttack = () => {
  const minDamage = 15;
  const maxDamage = dragon.strength;
  return getDamage(minDamage,maxDamage);
};

const warriorAttack = () => {
  const minDamage = warrior.strength;
  const maxDamage = warrior.strength * warrior.weaponDmg;
  return getDamage(minDamage,maxDamage);
};

const mageAttack = () => {
  const minDamage = mage.intelligence;
  const maxDamage = mage.intelligence * 2;
  const manaSpent = 15;
  
  const status = {
    damage: '',
    mana: 'Not enough mana!',
  };

  if (mage.mana >= manaSpent) {
    status.damage = getDamage(minDamage,maxDamage);
    status.mana = manaSpent;
  }
  
  return status;
}

const gameActions = {
  warriorTurn: () => {
    warrior.damage = warriorAttack();
    dragon.healthPoints -= warrior.damage;
  },
  mageTurn: () => {
    mage.damage = mageAttack().damage;
    mage.mana -= mageAttack().mana;
    dragon.healthPoints -= mage.damage;
  },
  dragonTurn: () => {
    dragon.damage = dragonAttack();
    mage.healthPoints -= dragon.damage;
    warrior.healthPoints -= dragon.damage;
  },
  turn: () => {
    gameActions.warriorTurn();
    gameActions.mageTurn();
    gameActions.dragonTurn();
    return battleMembers;
  }
};

// console.log(`Ataque Dragão: ${dragonAttack()}`);
// console.log(`Ataque Guerreiro: ${warriorAttack()}`);
// console.log(`Ataque Mago: ${Object.entries(mageAttack())}`);
console.log(gameActions.turn());