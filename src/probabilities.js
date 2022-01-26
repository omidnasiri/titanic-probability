const helper = require('./helpers');
const variables = require('./variables');

const gender = (data, sex) => {
  const total = data.length;
  let count = 0;
  data.forEach((row) => { if (row.Gender == sex) count++; });
  return count / total;
}

const age = (data, ageCategory) => {
  data = helper.agePrep(data, variables.ageRanges);
  const total = data.length;
  let count = 0;
  data.forEach((row) => { if (row.Age == ageCategory.name) count++; });
  return count / total;
}

const embark = (data, port) => {
  const total = data.length;
  let count = 0;
  data.forEach((row) => { if (row.Embarked == port.sign) count++; });
  return count / total;
}

const pClass = (data, pclass) => {
  const total = data.length;
  let count = 0;
  data.forEach((row) => { if (row.Pclass == pclass.sign) count++; });
  return count / total;
}

const sibSp = (data, sibSpCount) => {
  const total = data.length;
  let count = 0;
  data.forEach((row) => { if (row.SibSp == sibSpCount) count++; });
  return count / total;
}

const parch = (data, parchCount) => {
  const total = data.length;
  let count = 0;
  data.forEach((row) => { if (row.Parch == parchCount) count++; });
  return count / total;
}


const survive = (data, survivalStatus) => {
  const total = data.length;
  let count = 0;
  data.forEach((row) => { if (row.Survived == survivalStatus.sign) count++; });
  return count / total;
}

module.exports = {
  age,
  parch,
  sibSp,
  pClass,
  embark,
  gender,
  survive
}