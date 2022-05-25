const data = require('../data/zoo_data');

function isManager(id) {
  const managedList = data.employees.filter(({ managers }) => managers.includes(id));
  if (managedList.length === 0) { return false; }
  return true;
}

function getRelatedEmployees(managerId) {
  const managedList = data.employees.filter(({ managers }) => managers.includes(managerId));
  if (managedList.length === 0) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return managedList.map(({ firstName, lastName }) => `${firstName} ${lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
