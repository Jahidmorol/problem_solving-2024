/**
 * Consider an array/list of sheep where some sheep may be missing from their place.
 * We need a function that counts the number of sheep present in the array (true means present).
 * 
 *For example,
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
 */
const allSheep = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

// case 1
const countSheep = (allSheep) => {
  return allSheep.filter((s) => s === true).length;
};

// case 2
// initial value of zero
// Loop through the array
// Check if the sheep === true, increase the initial value + 1

// const countSheep = (allSheep) => {
//   let initial = 0;
//   allSheep.map((s) => {
//     if (s === true) initial++;
//   });

//   return initial;
// };

console.log(countSheep(allSheep));
