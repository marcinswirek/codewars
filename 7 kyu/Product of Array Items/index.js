// Description:
// Calculate the product of all elements in an array.

// If the array is null or is empty, the function should return null.

// Test Cases:
// /**
//  * Shuffles array in place.
//  * @param {Array} a items The array containing the items.
//  */
// function shuffle(a) {
//     var j, x, i;
//     for (i = a.length; i; i--) {
//         j = Math.floor(Math.random() * i);
//         x = a[i - 1];
//         a[i - 1] = a[j];
//         a[j] = x;
//     }
// }

// const testArr = [() => Test.assertEquals(product([5, 4, 1, 3, 9]), 540), () => Test.assertEquals(product([-2, 6, 7, 8]), -672),
// () => Test.assertEquals(product([10]), 10), () => Test.assertEquals(product([0, 2, 9, 7]), 0),
// () => Test.assertEquals(product(null), null), () => Test.assertEquals(product([]), null)];

// shuffle(testArr);

// describe("Solution", function(){
//   it("Sample Tests", function(){
//     testArr.forEach(x => x());
//   });

//   it("Random Tests", function() {
//     for (let i = 0; i < 100; ++i) {
//       let test = null;
//       if (~~(Math.random() * 11) != 0) {
//         test = [];
//         let loops = ~~(Math.random() * 20);
//         for (let j = 0; j < loops; ++j) {
//           test.push(~~(Math.random() * 1000));
//         }
//       }
//       let expected = !test || test.length === 0 ? null : test.reduce((prev, curr) => prev * curr);
//       let actual = product(test);
//       Test.assertEquals(actual, expected);
//     }
//   });
// });

//My solution

const product = values =>
  Array.isArray(values) && values.length
    ? values.reduce((total, value) => total * value, 1)
    : null;
