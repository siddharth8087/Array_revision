// Find the first repeating element in an array of integers

let num = [10, 5, 3, 4, 3, 5, 6];

const firstRepeat = (num) => {
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      if (num[i] === num[j]) {
        return num[i];
      }
    }
  }
};

console.log(firstRepeat(num));
