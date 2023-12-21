let num = [1, -2, -3, 0, 7, -8, -2];
const maxmultiArray = (num) => {
  let result = 1;

  for (let i = 0; i < num.length; i++) {
    let mul = num[i];
    for (let j = i + 1; j < num.length; j++) {
      result = Math.max(result, mul);
      mul *= num[j];
    }
    result = Math.max(result, mul);
  }
  return result;
};

console.log(maxmultiArray(num));
// with the help of Kdanes algorithm.......

const anotherFunc = (num) => {
  let max_ending = num[0];
  let min_ending = num[0];
  let maxSoFar = num[0];

  for (let i = 0; i < num.length; i++) {
    let temp = Math.max(num[i], min_ending * num[i], max_ending * num[i]);
    min_ending = Math.min(num[i], max_ending * num[i], min_ending * num[i]);
    max_ending = temp;
    maxSoFar = Math.max(maxSoFar, max_ending);
  }
  return maxSoFar;
};

console.log(anotherFunc(num));
