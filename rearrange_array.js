// Rearrange array in alternating positive & negative items with O(1) extra space

let num = [1, 2, 3, -4, -1, 4];
const Rearrange = (num) => {
  let negativeArray = [];

  for (let i = 0; i < num.length; i++) {
    if (num[i] < 0) {
      negativeArray.push(num[i]);
    }
  }
  return negativeArray;
};
console.log(num);
console.log(Rearrange(num));
