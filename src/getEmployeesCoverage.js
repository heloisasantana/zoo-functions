const data = require('../data/zoo_data');

function getAllEmployeesCoverage() {
  return data.employees.map((eachEmployee) => ({
    id: eachEmployee.id,
    fullName: `${eachEmployee.firstName} ${eachEmployee.lastName}`,
    species: data.species.filter((specie) => eachEmployee.responsibleFor.includes(specie.id))
      .map(({ name }) => name),
    locations: data.species.filter((specie) => eachEmployee.responsibleFor.includes(specie.id))
      .map(({ location }) => location),
  }));
}

function getEmployeesCoverage(o) {
  if (!o) { return getAllEmployeesCoverage(); }
  const rule = (({ firstName: f, lastName: l, id }) => f === o.name || l === o.name || id === o.id);
  const filteredEmployee = data.employees.filter(rule);
  if (filteredEmployee.length > 0) {
    return filteredEmployee.map((employee) => ({
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: data.species.filter((specie) => employee.responsibleFor.includes(specie.id))
        .map(({ name }) => name),
      locations: data.species.filter((specie) => employee.responsibleFor.includes(specie.id))
        .map(({ location }) => location),
    }))[0];
  }
  if (filteredEmployee.length === 0) { throw new Error('Informações inválidas'); }
}

module.exports = getEmployeesCoverage;
