let num = [1, 2, 3, 4, 5, 6];

const rotate = (arr) => {
  let n = arr.length;
  let lastEl = arr[n - 1];

  for (let i = n - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = lastEl;
};

rotate(num);
console.log(num);
