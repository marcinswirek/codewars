// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// FUNDAMENTALSSTRINGSARRAY

//My solution

const fakeBin = x =>
  x
    .split('')
    .map(num => (num < 5 ? (num = num * 0) : (num = num / num)))
    .join('');

//Other solutions
function fakeBin(x) {
  return x.replace(/\d/g, n => '0000011111'[n]);
}

function fakeBin(x) {
  return x.replace(/[1234]/g, '0').replace(/[56789]/g, '1');
}
