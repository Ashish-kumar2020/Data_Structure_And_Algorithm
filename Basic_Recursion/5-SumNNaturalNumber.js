const sumNNaturalNumber = (sum, num, target) => {
  if (num === target) return sum;
  return sumNNaturalNumber((sum += num), num + 1, target);
};

const sum = 0;
const num = 1;
const target = 51;
console.log(sumNNaturalNumber(sum, num, target));
