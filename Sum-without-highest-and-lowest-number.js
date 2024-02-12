//Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
//The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

//Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

const sumArray = (array) => {
  if (array == null || array.length <= 1) return 0;

  //   const sum = array
  //     .filter((x) => x !== Math.max(...array) && x !== Math.min(...array))
  //     .reduce((acc, current) => acc + current, 0);

  //   const sorted = array.sort((a, b) => a - b);
  //   const sliced = sorted.slice(1, -1);
  //   const sum = sliced.reduce((acc, current) => acc + current, 0);

  return array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((acc, current) => acc + current, 0);
};

console.log(sumArray([1, 1, 11, 2, 3]));

//Input validation
//If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
