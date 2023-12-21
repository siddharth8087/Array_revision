let num = [-2, -3, 4, -1, -2, 1, 5, -3];

const largestSum = (num) => {
  let result = 0;

  for (let i = 0; i < num.length; i++) {
    let sum = num[i];
    for (let j = i + 1; i < num.length; j++) {
      result = Math.max(result, sum);
      sum += num[j];
    }
    result = Math.max(result, sum);
  }
  return result;
};

// console.log(largestSum(num));
// kadane's Algorithm.....
const anotherFunc = (num) => {
  let maxEndings = num[0];
  let maxSoFar = num[0];

  for (let i = 0; i < num.length; i++) {
    maxEndings = Math.max(num[i], maxEndings + num[i]);
    maxSoFar = Math.max(maxSoFar, maxEndings);
  }
  return maxSoFar;
};

console.log(anotherFunc(num));
