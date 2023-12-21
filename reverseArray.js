let num = [1, 2, 3, 4, 5];

let start = 0;
let end = num.length - 1;

while (start < end) {
  [num[start], num[end]] = [num[end], num[start]];
  start++;
  end--;
}

console.log(num);
