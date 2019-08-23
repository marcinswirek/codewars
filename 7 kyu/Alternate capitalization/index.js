// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

// Indexed capitalization

// Even-odd disparity

// FUNDAMENTALSSTRINGS

//My solution
function capitalize(s) {
  const result = []
  const even = s
    .split("")
    .map((letter, index) => (index % 2 == 0 ? letter.toUpperCase() : letter))
    .join("")
  const odd = s
    .split("")
    .map((letter, index) => (index % 2 !== 0 ? letter.toUpperCase() : letter))
    .join("")
  result.push(even, odd)
  return result
}

//Other solution
function capitalize(s) {
  return [0, 1].map(r =>
    [...s].map((c, i) => (i % 2 === r ? c.toUpperCase() : c)).join("")
  )
}
