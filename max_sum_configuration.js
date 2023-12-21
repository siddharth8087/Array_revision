function max_sum(a, n) {
  let res = Number.MIN_VALUE;

  for (let i = 0; i < n; i++) {
    let current = 0;

    for (let j = 0; j < n; j++) {
      let index = (i + j) % n;
      current += j * a[index];
    }
    res = Math.max(current, res);
  }
  return res;
}

var arr = [8, 3, 1, 2];
var n = arr.length;

console.log(max_sum(arr, n));
