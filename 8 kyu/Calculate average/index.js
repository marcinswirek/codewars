// Write function avg which calculates average of numbers in given list.

// FUNDAMENTALSFUNCTIONAL PROGRAMMINGDECLARATIVE PROGRAMMING

//My solution

function find_average(array) {
  let result = 0;
  array.forEach(num => (result += num));
  return result / array.length;
}

//More solutions
function find_average(array) {
  var sum = array.reduce((a, b) => a + b, 0);
  return sum / array.length;
}
