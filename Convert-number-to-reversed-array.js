// given a random non-negative, you have to return the digits of this number within an array in reverse order.

// example--
// 348597 => [7, 9, 5, 8, 4, 3]
// 0 => [0]

// steps --
// 1. change the number to the string
// 2. Split the string to an array
// 3. change the Strings in the array to Numbers
// 4. Reverse the array

const digitizes = (n) => {
  return n
    .toString()
    .split("")
    .map((d) => Number(d))
    .reverse();
};

console.log(digitizes(348597));
