// Description:
// Your distributeEvenly function will take an array as an argument and needs to return a new array with the values distributed evenly.

// Example:

// Argument: ['one', 'one', 'two', 'two', 'three', 'three', 'four', 'four']

// Result: ['one', 'two', 'three', 'four', 'one', 'two', 'three', 'four']

// The underlying order will stay the same as in the original array. So in the case of our argument above, one comes before two so it stays this way in the returned array.

// The aim is to have the longest possible chain of evenly distributed values (from the left to right), this means that an argument with many of the same elements might have many which are repeated at the end.

// Example:

// Argument: ['one', 'one', 'one', 'one', 'one', 'two', 'three']

// Result: [ 'one', 'two', 'three', 'one', 'one', 'one', 'one' ]

// Test Cases:
// describe("Basic tests", () => {
//   it("Testing for the correct order of values", () => {
//     const arg = ['one', 'one', 'two', 'two', 'three', 'three', 'four', 'one'];
//     const res = ['one', 'two', 'three', 'four', 'one', 'two', 'three', 'one'];
//     Test.assertDeepEquals(distributeEvenly(arg), res);
//   });
// });

// describe("Random tests", () => {
//   const createRandomArray = () => {
//     const strs = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
//     const randomNum = Math.floor(Math.random() * 10) + 1  
//     return Array(30).fill('').map(val => strs[numFromZeroToTen()]);
//   }
  
//   const numFromZeroToTen = () => Math.floor(Math.random() * 11) + 0;
  
//   const distributeEvenlySolution = (array) => {
//     const arrayOfTypes = createArrayOfTypes(array);
   
//     return array
//       .map((item, i) => arrayOfTypes.map(el => el[i]))
//       .reduce((a, b) => a.concat(b))
//       .filter(_ => _);
//   };
  
//   const createArrayOfTypes = (array) => {
//     const uniqueTypes = [...new Set(array)];
//     return uniqueTypes.map(outer => array.filter(inner => outer === inner));
//   };
  
//   for (let i = 0;  i < 50; i++) {
//     const arr = createRandomArray();
    
//     it(`Testing [${arr}]`, () => {
//       Test.assertDeepEquals(distributeEvenly(arr), distributeEvenlySolution(arr), "It should work for random inputs too");
//     });  
//   }
// });

//My solution

const distributeEvenly = (array) => {
  let map = new Map;
  for (let s of array) map.set(s, (map.get(s) || 0) + 1);
  map = [...map];
  array = array.map((_, i) => { if (map[i][1] > 1) map.push([map[i][0], map[i][1]-1]);
      return map[i][0];}); 
  return array;
};