const data = require('../data/zoo_data');

// Referência utilizada: https://youtu.be/bdLkAm12pgI;
function getSpeciesByIds(...ids) {
  return data.species.filter((specie) => ids.includes(specie.id));
}

module.exports = getSpeciesByIds;
