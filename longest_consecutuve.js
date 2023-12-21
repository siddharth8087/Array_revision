let num = [1, 9, 3, 10, 4, 20, 2];

function longestSub(num) {
  num.sort((a, b) => a - b);
  let count = 1;
  let dist = [];
  let ans = 0;

  for (let i = 1; i < num.length; i++) {
    if (num[i] !== num[i - 1]) {
      dist.push(num[i]);
    }
  }

  for (let i = 0; i < dist.length; i++) {
    if (i > 0 && dist[i] === dist[i - 1] + 1) {
      count++;
    } else {
      count = 1;
    }
    ans = Math.max(ans, count);
  }
  return ans;
}

console.log(longestSub(num));

function anotherFunc(num) {
  let count = 1;
  let ans = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] === num[i + 1]) {
      continue;
    } else if (num[i] + 1 === num[i + 1]) {
      count++;
    } else {
      count = 1;
    }
    ans = Math.max(ans, count);
  }
  return ans;
}
console.log(anotherFunc(num));
