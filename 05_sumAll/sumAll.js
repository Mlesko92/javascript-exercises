const sumAll = function (int1, int2) {
  if (int1 < 0 || int2 < 0 || !Number.isInteger(int1) || !Number.isInteger(int2)) {
    return "ERROR";
  }
  let sum = 0;
  let firstValue;
  let secondValue;
  if (int1 > int2) {
    firstValue = int2;
    secondValue = int1;
  } else {
    firstValue = int1;
    secondValue = int2;
  }
  for (let i = firstValue; i <= secondValue; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
