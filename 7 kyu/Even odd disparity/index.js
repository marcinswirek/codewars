// Given an array, return the difference between the count of even numbers and the count of odd numbers. 0 will be considered an even number.

// For example:
// solve([0,1,2,3]) = 0 because there are two even numbers and two odd numbers. Even - Odd = 2 - 2 = 0.
// Let's now add two letters to the last example:

// solve([0,1,2,3,'a','b']) = 0. Again, Even - Odd = 2 - 2 = 0. Ignore letters.
// The input will be an array of lowercase letters and numbers only.

// Haskell:
// solve ["0","1","2","3","a","b"] = 0 -- In Haskell, all array elements will be strings.
// Other languages:
// solve([0, 1 ,2, 3, 'a', 'b']) = 0
// Good luck!

// If you like this Kata, please try:

// Longest vowel chain

// Word values

// FUNDAMENTALS

//Solution

function solve(a) {
  const numbers = [];
  const letter = [];
  const even = [];
  const odd = [];
  a.forEach(item =>
    typeof item === 'number' ? numbers.push(item) : letter.push(item)
  );
  numbers.forEach(number =>
    number % 2 === 0 ? even.push(number) : odd.push(number)
  );
  return even.length - odd.length;
};
