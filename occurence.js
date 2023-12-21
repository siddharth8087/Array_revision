let num = [1, 1, 2, 2, 2, 2, 3];
let target = 2;

const countO = (num, target) => {
  let count = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] === 2) {
      count++;
    }
  }
  return count;
};

let result = countO(num, target);
console.log("Result: " + result);
