const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) { return {}; }
  if (data.employees.some((employee) => employee.firstName === employeeName)) {
    return data.employees.find(({ firstName }) => (employeeName === firstName));
  }
  if (data.employees.some((employee) => employee.lastName === employeeName)) {
    return data.employees.find(({ lastName }) => (employeeName === lastName));
  }
}

module.exports = getEmployeeByName;
