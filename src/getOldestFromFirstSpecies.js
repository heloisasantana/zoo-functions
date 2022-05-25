const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const searchEmployee = data.employees.find((employee) => employee.id === id);
  const searchResponsibleFor = searchEmployee.responsibleFor[0];
  const searchAnimal = data.species.find((specie) => specie.id === searchResponsibleFor);
  const searchOldest = searchAnimal.residents.reduce((accumulator, resident) => {
    if (resident.age > accumulator[2]) {
      return [resident.name, resident.sex, resident.age];
    }
    return accumulator;
  }, ['', '', 0]);
  return searchOldest;
}

module.exports = getOldestFromFirstSpecies;
// Referência para aplicação correta da HOF reduce com if e montagem do objeto final: monitoria com Rosalia Oliveira
