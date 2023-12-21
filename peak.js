// Given an array arr of n elements that is first strictly increasing and then maybe strictly decreasing, find the maximum element in the array.

let array = [10, 20, 15, 2, 23, 90, 67];

const peak = (array) => {
  for (let i = 1; i < array.length - 1; i++) {
    if (array[i - 1] <= array[i] && array[i] >= array[i + 1]) {
      console.log(array[i]);
    }
  }
};

peak(array);
