let num = [4, 2, -1, 1, 6];

const subArrayZeero = (num) => {
  for (let i = 0; i < num.length; i++) {
    let sum = num[i];
    if (sum === 0) {
      return true;
    }
    for (let j = i + 1; i < num.length; j++) {
      sum += num[j];

      if (sum === 0) {
        return true;
      }
    }
  }
  return false;
};

let result = subArrayZeero(num);
console.log(result);
