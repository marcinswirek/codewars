// Description:
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

// Test Cases:
// Test.assertSimilar(stray([1, 1, 2]), 2);

// Test.assertSimilar(stray([17, 17, 3, 17, 17, 17, 17]), 3);

// Test.assertSimilar(stray([8, 1, 1, 1, 1, 1, 1]), 8);

// Test.assertSimilar(stray([1, 1, 1, 1, 1, 1, 0]), 0);

// Test.assertSimilar(stray([0, 0, 0, 7, 0, 0, 0]), 7);

// Test.assertSimilar(stray([-21, -21, -21, -21, -6, -21, -21]), -6);

// var strayNumber = randomInt(-10000, 10000);
// Test.assertSimilar(stray(validRandomArray(101, strayNumber)), strayNumber);

// var strayNumber = randomInt(-10000, 10000);
// Test.assertSimilar(stray(validRandomArray(15273, strayNumber)), strayNumber);

//My solution

function stray(numbers) {
  let numbersSorted = numbers.sort();
  if (numbersSorted[0] === numbersSorted[1]) {
    return numbersSorted[numbers.length - 1];
  } else {
    return numbersSorted[0];
  }
}
