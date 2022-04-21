// Exercício 03

const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  console.log("Returned planet: ", mars.name);
};

// getPlanet(); // imprime Marte depois de 4 segundos
setTimeout(() => getPlanet(), 4000);
