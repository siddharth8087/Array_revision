let num = [-12, 11, -13, -5, 6, -7, 5, -3, -6];

const moveNegative = (num) => {
  let j = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] < 0) {
      if (i !== j) {
        let temp = num[i];
        num[i] = num[j];
        num[j] = temp;
      }
      j++;
    }
  }
};
