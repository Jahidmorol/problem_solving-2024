//You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

function positiveSum(arr) {
  //   let sum = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] > 0) {
  //       sum += arr[i];
  //     }
  //   }

  const posNum = arr.filter((x) => x > 0);
  const sum = posNum.reduce((sum, x) => sum + x, 0);
  return sum;
}

console.log(positiveSum([-1, -4, 7, 12]));
