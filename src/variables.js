const genders = [ 'male', 'female' ];

const survivalStatus = [
  { name: 'Survived', sign: 1 },
  { name: 'Drowned', sign: 0 },
]

const ageRanges = [
  { name: 'child', low: 0, high: 10 },
  { name: 'teenager', low: 11, high: 18 },
  { name: 'youngster', low: 19, high: 30 },
  { name: 'adult', low: 31, high: 60 },
  { name: 'elder', low: 61, high: 100 }
]

const ports = [
  { name: 'Cherbourg', sign: 'C' },
  { name: 'Queenstown', sign: 'Q' },
  { name: 'Southampton', sign: 'S' }
]

const ticketClasses = [
  { name: 'Upper', sign: 1 },
  { name: 'Middle', sign: 2 },
  { name: 'Lower', sign: 3 }
]

module.exports = {
  ports,
  genders,
  ageRanges,
  ticketClasses,
  survivalStatus
}