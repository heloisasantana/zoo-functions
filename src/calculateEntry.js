const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const countChild = entrants.filter((entrant) => entrant.age < 18).length;
  const countAdult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const countSenior = entrants.filter((entrant) => entrant.age >= 50).length;
  return { child: countChild, adult: countAdult, senior: countSenior };
}

function calculateEntry(entrants) {
  if (!entrants) {
    return 0;
  }
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const toPay = data.prices;
  const people = Object.values(countEntrants(entrants));
  return (toPay.child * people[0]) + (toPay.adult * people[1]) + (toPay.senior * people[2]);
}

module.exports = { calculateEntry, countEntrants };
