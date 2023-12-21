// Find first non-repeating element in a given Array of integers

const nonRepeat = (num) => {
  let count = {};
  for (let i = 0; i < num.length; i++) {
    if (!count[num[i]]) {
      count[num[i]] = 1;
    } else {
      count[num[i]]++;
    }
  }

  for (let i = 0; i < num.length; i++) {
    if (count[num[i]] === 1) {
      return num[i];
    }
  }
  return null;
};

let num = [-1, 2, -1, 3, 0];
console.log(nonRepeat(num));
