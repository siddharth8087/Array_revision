let num = [1, 0, 0, 1, 1, 0, 0, 1];

const countSubarray = (num) => {
  let count = 0;
  let sum = 0;
  let freq = { 0: 1 };

  for (let i = 0; i < num.length; i++) {
    sum += num[i] === 0 ? -1 : num[i];

    if (freq[sum]) {
      count += freq[sum];
      freq[sum]++;
    } else {
      freq[sum] = 1;
    }
  }
  return count;
};

console.log(countSubarray(num)); // Output: 6
