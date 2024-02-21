/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once
Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
*/

/*
1. turn the string to array
2. loop through the array
3. Repeat each element once
4. return the array into a string again
*/

const doubleChar = (str) => {
  return (
    str
      .split("")
      // .map((x) => x + x)
      .map((x) => x.repeat(4))
      .join("")
  );
};

console.log(doubleChar("hello"));
