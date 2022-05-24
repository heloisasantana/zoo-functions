const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalSpecie = data.species.filter(({ name }) => name === animal);
  return animalSpecie[0].residents.every(({ age: animalAge }) => animalAge >= age);
}

module.exports = getAnimalsOlderThan;
