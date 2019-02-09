// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// FUNDAMENTALS

//My solution

const accum = s =>
  [...s.toLowerCase()]
    .map((letter, index) => letter.repeat(index + 1))
    .map(item => item.replace(item[0], item[0].toUpperCase()))
    .join('-');

//Other solutions
function accum(s) {
  return s
    .split('')
    .map((x, index) => x.toUpperCase() + Array(index + 1).join(x.toLowerCase()))
    .join('-');
}
