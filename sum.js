let arr = [1, 4, 0, 0, 3, 10, 5];
let sum = 7;

function subArray(arr, sum) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == sum) {
        return [arr[i], arr[j]];
      }
    }
  }
}

console.log(subArray(arr, sum)); // Output

function findSubarrayWithGivenSum(arr, sum) {
  // Create a map to store the cumulative sum and its index
  let map = new Map();
  // Initialize a variable `currSum` to keep track of the cumulative sum
  let currSum = 0;

  // Loop through the input array
  for (let i = 0; i < arr.length; i++) {
    // Add the current element to the cumulative sum
    currSum += arr[i];

    // Check if the cumulative sum minus the target sum is in the map
    if (map.has(currSum - sum)) {
      // If found, return the subarray starting from the index stored in the map plus 1, to the current index
      return arr.slice(map.get(currSum - sum) + 1, i + 1);
    }

    // Store the cumulative sum and its index in the map
    map.set(currSum, i);
  }

  // If no subarray with the given sum is found, return an empty array
  return [];
}

// Test the function with an example array and target sum
