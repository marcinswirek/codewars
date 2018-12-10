// Description:
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains more than 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique
// FUNDAMENTALSALGORITHMSNUMBERSARRAYS

//Solution
function findUniq(arr) {
  const arrSorted = arr.sort();
  if (
    arrSorted[0] === arrSorted[1] &&
    arrSorted[0] !== arrSorted[arrSorted.length - 1]
  ) {
    return arrSorted[arrSorted.length - 1];
  } else if (
    arrSorted[0] !== arrSorted[1] &&
    arrSorted[0] !== arrSorted[arrSorted.length - 1]
  ) {
    return arrSorted[0];
  }
}
