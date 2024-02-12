//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

//Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// steps-->
//1. create empty string
//2. Take the Number argument and loop through it
//3. Add the string to the empty one

const stringRepeat = (n, s) => {
  // let result = "";
  // for (let i = 0; i < n; i++) {
  //   result += s;
  // }
  return s.repeat(n);
};

console.log(stringRepeat(3, "Hello"));
