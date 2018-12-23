// Convert number to reversed array of digits
// Given a random number:

// C#: long;
// C++: unsigned long;
// You have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// FUNDAMENTALSNUMBERSARRAYS

// Solution
const digitize = n =>
  n
    .toString()
    .split('')
    .reverse()
    .map(num => num * 1);
//Other solutions
function digitize(n) {
  return String(n)
    .split('')
    .map(Number)
    .reverse();
}
