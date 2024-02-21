/* 
    Given an array of integers.

    Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

    If the input is an empty array or is null, return an empty array.

    Example
    For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

// solution:
/*
1. create empty array for positive numbers
2. create variable for sum of negative numbers
3. loop through the given array 
4. check if the number is positive add it to the array , add to sum variable
*/

const positiveSum = (arr) => {
  const countPositive = arr?.filter((x) => x > 0).length;
  const sumNegative = arr?.filter((x) => x < 0).reduce((acc, x) => acc + x, 0);

  if (countPositive || sumNegative) {
    return [countPositive, sumNegative];
  } else {
    return [];
  }
};

console.log(
  positiveSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
);
