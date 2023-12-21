function binarySearchMissingValue(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);

    // Check if the missing value is on the left or right side
    if (arr[mid] === mid + 1) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // At this point, 'left' represents the index where the missing value occurs
  return left + 1;
}

// Example usage:
const sortedArray = [1, 2, 3, 5, 6, 7, 8];
const missingValue = binarySearchMissingValue(sortedArray);
console.log("Missing value:", missingValue);
