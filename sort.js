// write a sorting algorithm for the given array.

let num = [0, 23, 14, 12, 9];

// for (let i = 0; i < num.length; i++) {
//   for (let j = i + 1; j < num.length; j++) {
//     if (num[i] > num[j]) {
//       let temp = num[i];
//       num[i] = num[j];
//       num[j] = temp;
//     }
//   }
// }
num.sort((a, b) => a - b);
console.log(num);
