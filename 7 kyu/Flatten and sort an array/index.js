// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Addendum:

// Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

// http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well

// FUNDAMENTALSARRAYSSORTINGALGORITHMSLAMBDASFUNCTIONAL PROGRAMMINGFUNCTIONSDECLARATIVE PROGRAMMINGCONTROL FLOWBASIC LANGUAGE FEATURES

//My very poor solution :)

function flattenAndSort(array) {
  function compareNumbers(a, b) {
    return a - b;
  }
  const arrWithoutBlank = [];
  array.map(item => (item.length > 0 ? arrWithoutBlank.push(item) : 0));
  if (arrWithoutBlank.length > 0) {
    const arrOfNumbers = arrWithoutBlank
      .join(',')
      .split(',')
      .map(item => item * 1);
    return arrOfNumbers.sort(compareNumbers);
  } else {
    return [];
  }
}

//Much  better way
"use strict";

function flattenAndSort(array) {
  return [].concat(...array).sort((a,b) => a - b);
}
