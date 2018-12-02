// Description:
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
// FUNDAMENTALSARRAYSNUMBERS

//My solution

function grow(x) {
  let grow = (accumulator, currentValue) => accumulator * currentValue;
  return x.reduce(grow);
}
