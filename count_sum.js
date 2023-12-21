let num = [1, 5, 7, -1];
let target = 6;

const countPairs = (num, target) => {
  let count = 0;
  for (let i = 0; i < num.length - 1; i++) {
    for (let j = i + 1; j < num.length; j++) {
      if (num[i] + num[j] === target) {
        count++;
      }
    }
  }
  return count;
};

let result = countPairs(num, target);

console.log(result);
