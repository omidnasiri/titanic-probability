const h = (pFunc, variables, data) => {
  let sum = 0;
  for (const item of variables) {
    const px = pFunc(data, item);
    if (px != 0) sum += px * Math.log(px);
  }
  return sum * -1;
}

const h2 = (pFunc, variables, data, totalSurvived) => {
  let sum = 0;
  for (const item of variables) {
    const pxy = pFunc(data, item, totalSurvived);
    if (pxy != 0) sum += pxy * Math.log2(Math.abs(pxy));
  }
  return sum * -1;
}

module.exports = {
  h,
  h2
}