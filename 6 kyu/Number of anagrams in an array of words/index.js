// An anagram is a word, a phrase, or a sentence formed from another by rearranging its letters. An example of this is "angel", which is an anagram of "glean".

// Write a function that receives an array of words, and returns the total number of distinct pairs of anagramic words inside it.

// Some examples:

// There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
// There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"]
// ALGORITHMS

//My solution

const anagramCounter = wordsArray => {
  let counter = 0;
  const arr = wordsArray.map(word =>
    word
      .split('')
      .sort()
      .join('')
  );
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        counter++;
      }
    }
  }
  return counter;
};

//Other solutions

anagramCounter = a =>
  (a = a.map(e =>
    e
      .split('')
      .sort()
      .join('')
  )).reduce(
    (r, e, i) => (a.forEach((b, j) => (r += i == j ? 0 : e == b ? 1 : 0)), r),
    0
  ) / 2;

//====================

function anagramCounter(arrayOfWords) {
  let sortedWords = arrayOfWords.map(word =>
    word
      .split('')
      .sort()
      .join('')
  );
  let numberOfAnagrams = 0;

  sortedWords.forEach((word, theIndex) => {
    for (let i = theIndex + 1; i < sortedWords.length; i++) {
      if (word === sortedWords[i]) {
        numberOfAnagrams++;
      }
    }
  });
  return numberOfAnagrams;
}
