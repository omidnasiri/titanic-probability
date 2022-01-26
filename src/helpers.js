const reader = require('xlsx');

const input = (path) => {
  const file = reader.readFile(path);
  const sheets = file.SheetNames;
  let data = [];
  for (let i = 0; i < sheets.length; i++) {
    const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
    temp.forEach((res) => { data.push(res) });
  }
  return data;
}

const agePrep = (data, ranges) => {
  const ages = [];
  data.forEach((row) => { if (row.Age != null) ages.push(row.Age) });
  const med = median(ages);
  data.forEach((row) => { if (row.Age == null) row.Age = med });

  data.forEach((row) => {
    for(let range of ranges) {
      if (row.Age <= range.high && row.Age >= range.low) {
        row.Age = range.name;
      }
    }
  })
  return data;
}

const median = (arr) => {
  arr.sort();
  return arr[arr.length / 2];
}

const setSibSp = (data) => {
  const arr = [];
  for (let index = 0; index < maxSibSp(data); index++) {
    arr.push(index);
  }
  return arr;
}

const setParch = (data) => {
  const arr = [];
  for (let index = 0; index < maxParch(data); index++) {
    arr.push(index);
  }
  return arr;
}

const maxSibSp = (data) => {
  let max = 0;
  data.forEach((row) => { if (row.SibSp > max) max = row.SibSp })
  return max;
}

const maxParch = (data) => {
  let max = 0;
  data.forEach((row) => { if (row.Parch > max) max = row.Parch })
  return max;
}

const totalSurvived = (data) => {
  let sum = 0;
  for (const item of data) {
    if (item.Survived) sum++;
  }
  return sum;
}

function compare(a, b) {
  if ( a.Ixy < b.Ixy ){
    return 1;
  }
  if ( a.Ixy > b.Ixy ){
    return -1;
  }
  return 0;
}

module.exports = {
  input,
  agePrep,
  compare,
  setParch,
  setSibSp,
  totalSurvived
}