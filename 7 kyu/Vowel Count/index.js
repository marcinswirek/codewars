// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.

// FUNDAMENTALSSTRINGSUTILITIES

//My slution

const getCount = str =>
  str.length -
  str
    .split('')
    .filter(letter => ['a', 'e', 'i', 'o', 'u'].indexOf(letter) === -1).length;


//Other solutions

function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

