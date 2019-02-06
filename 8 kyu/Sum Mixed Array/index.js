// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// FUNDAMENTALSSTRINGSNUMBERSARRAYS

//My solution

const sumMix = x => x.map(num => num * 1).reduce((a, b) => a + b);

//Other solutions

const sumMix = x => x.reduce((a, b) => +b + a, 0);
