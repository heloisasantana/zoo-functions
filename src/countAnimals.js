const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return data.species.reduce((accumulator, specie) => {
      accumulator[specie.name] = specie.residents.length;
      return accumulator;
    }, {});
  }
  if (!animal.sex) {
    const animalSpecie = data.species.filter(({ name }) => animal.specie === name);
    return animalSpecie.reduce((accumulator, { residents }) => accumulator + residents.length, 0);
  }
  const animalSpecie = data.species.find(({ name }) => animal.specie === name);
  return animalSpecie.residents.filter(({ sex }) => animal.sex === sex).length;
}

module.exports = countAnimals;
