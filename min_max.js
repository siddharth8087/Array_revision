// Program to find the minimum (or maximum) element of an array
let num = [26, 32, 435, 34556, 253];

const Minmax = (num) => {
  num.sort((a, b) => a - b);
  return `The smallest number is ${num[0]} and the largest number is ${
    num[num.length - 1]
  }`;
};

console.log(Minmax(num));
