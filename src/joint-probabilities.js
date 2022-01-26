const helper = require('./helpers');
const variables = require('./variables');

const gender = (data, sex, totalSurvived) => {
  let count = 0;
  data.forEach((row) => { if (row.Gender == sex && row.Survived) count++; });
  return count / totalSurvived;
}

const age = (data, ageCategory, totalSurvived) => {
  data = helper.agePrep(data, variables.ageRanges);
  let count = 0;
  data.forEach((row) => { if (row.Age == ageCategory.name && row.Survived) count++; });
  return count / totalSurvived;
}

const embark = (data, port, totalSurvived) => {
  let count = 0;
  data.forEach((row) => { if (row.Embarked == port.sign && row.Survived) count++; });
  return count / totalSurvived;
}

const pClass = (data, pclass, totalSurvived) => {
  let count = 0;
  data.forEach((row) => { if (row.Pclass == pclass.sign && row.Survived) count++; });
  return count / totalSurvived;
}

const sibSp = (data, sibSpCount, totalSurvived) => {
  let count = 0;
  data.forEach((row) => { if (row.SibSp == sibSpCount && row.Survived) count++; });
  return count / totalSurvived;
}

const parch = (data, parchCount, totalSurvived) => {
  let count = 0;
  data.forEach((row) => { if (row.Parch == parchCount && row.Survived) count++; });
  return count / totalSurvived;
}

module.exports = {
  age,
  parch,
  sibSp,
  pClass,
  embark,
  gender
}