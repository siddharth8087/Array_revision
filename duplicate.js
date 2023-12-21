let num = [1, 2, 3, 6, 3, 6, 1];
const duplicate = (num) => {
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      if (num[i] === num[j]) {
        {
          console.log(`${num[i]} and ${num[j]} are duplicates.`);
        }
      }
    }
  }
};

duplicate(num);
