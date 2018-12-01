// Given an integer as input, can you round it to the next (meaning, "higher") 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.

// FUNDAMENTALS

// Sample Tests:

// [
//   [0,0],
//   [1,5],
//   [3,5],
//   [5,5],
//   [7,10],
//   [39,40]
// ].forEach(
//   ([x,out])=> Test.assertEquals(roundToNext5(x), out )
// );

//My solution
function roundToNext5(n) {
  let moduloRest = n % 5;
  if (n >= 0) {
    const resultNumber = moduloRest ? n + (5 - moduloRest) : n;
    return resultNumber;
  } else {
    const resultNumber = moduloRest ? n - moduloRest : n;
    return resultNumber;
  }
}

function roundToNext5(n){
  return Math.ceil(n/5)*5;
}
