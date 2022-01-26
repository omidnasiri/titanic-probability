const nodePath = require('path');
const helpers = require('./helpers');
const functions = require('./functions');
const variables = require('./variables');
const probabilities = require('./probabilities');
const jointProbabilities = require('./joint-probabilities');

const main = () => {
  const path = nodePath.join(__dirname, '../train.xlsx')
  const data = helpers.input(path);

  const sibSpVar = helpers.setSibSp(data);
  const parchVar = helpers.setParch(data);

  const totalSurvived = helpers.totalSurvived(data);

  let hx = 0;
  let hxy = 0;
  const arr = [];

  const hy = functions.h(probabilities.survive, variables.survivalStatus, data);

  hx = functions.h(probabilities.gender, variables.genders, data);
  hxy = functions.h2(jointProbabilities.gender, variables.genders, data, totalSurvived);
  arr.push({
    factor: 'Gender',
    Ixy: hx + hy - hxy
  });

  hx = functions.h(probabilities.age, variables.ageRanges, data);
  hxy = functions.h2(jointProbabilities.age, variables.ageRanges, data, totalSurvived);
  arr.push({
    factor: 'Age',
    Ixy: hx + hy - hxy
  });

  hx = functions.h(probabilities.embark, variables.ports, data);
  hxy = functions.h2(jointProbabilities.embark, variables.ports, data, totalSurvived);
  arr.push({
    factor: 'Embark',
    Ixy: hx + hy - hxy
  });

  hx = functions.h(probabilities.pClass, variables.ticketClasses, data);
  hxy = functions.h2(jointProbabilities.pClass, variables.ticketClasses, data, totalSurvived);
  arr.push({
    factor: 'Pclass',
    Ixy: hx + hy - hxy
  });

  hx = functions.h(probabilities.parch, parchVar, data);
  hxy = functions.h2(jointProbabilities.parch, parchVar, data, totalSurvived);
  arr.push({
    factor: 'Parch',
    Ixy: hx + hy - hxy
  });

  hx = functions.h(probabilities.sibSp, sibSpVar, data);
  hxy = functions.h2(jointProbabilities.sibSp, sibSpVar, data, totalSurvived);
  arr.push({
    factor: 'SibSp',
    Ixy: hx + hy - hxy
  });

  arr.sort(helpers.compare);
  console.log(arr);
}

main();