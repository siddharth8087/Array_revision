let num = [1, 5, 10, 20, 40, 80];
let num1 = [6, 7, 20, 80, 100];
let num3 = [3, 4, 15, 20, 30, 70, 80, 120];

// we have to find the common element in the above arrays...........
const findIntersection = (num, num1) => {
  let i = 0;
  let j = 0;
  let emptyArray = [];

  while (i < num.length && j < num1.length) {
    if (num[i] < num1[j]) {
      i++;
    } else if (num[i] > num1[j]) {
      j++;
    } else {
      emptyArray.push(num[i]);
      i++;
      j++;
    }
  }
  return emptyArray;
};

let result1 = findIntersection(num, num1);
let ans = findIntersection(result1, num3);

console.log(ans);
