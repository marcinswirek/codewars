// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// is_square (-1) # => false
// is_square   0 # => true
// is_square   3 # => false
// is_square   4 # => true
// is_square  25 # => true
// is_square  26 # => false

// Test Cases:
// Test.describe("isSquare", function(){
//   Test.it("should work for some examples", function(){
//     Test.assertEquals(isSquare(-1), false, "-1: Negative numbers cannot be square numbers");
//     Test.assertEquals(isSquare( 0), true, "0 is a square number (0 * 0)");
//     Test.assertEquals(isSquare( 3), false, "3 is not a square number");
//     Test.assertEquals(isSquare( 4), true, "4 is a square number (2 * 2)");
//     Test.assertEquals(isSquare(25), true, "25 is a square number (5 * 5)");
//     Test.assertEquals(isSquare(26), false, "26 is not a square number");
//   });
//   Test.it("should work for random square numbers", function(){
//     var r, i;
//     for(i = 0; i < 100; ++i){
//       r = (Math.random() * 0xfff0) | 0;
//       Test.expect(isSquare(r*r),`${r*r} is a square number (${r} * ${r})`);
//     }
//   });
//   Test.it("should work for random numbers", function(){
//     var r, i, solution = function(n){
//       if(n < 0)
//         return false;
//       return n === Math.pow(Math.round(Math.sqrt(n)), 2);
//     }
//     r = Test.randomNumber();
//     Test.assertEquals(isSquare(r), solution(r), "Your answer was wrong for " + r);

//     for(i = 0; i < 1000; ++i){
//       r = Test.randomNumber();
//       if(isSquare(r) !== solution(r)){
//         // only post a single test, all 1000 take too much bandwith
//         Test.assertEquals(isSquare(r), solution(r), "Your answer was wrong for " + r);
//         break;
//       }
//     }
//   });
// });

//My solution

const isSquare = function(n) {
  const result = Math.sqrt(n);
  if (n % result === 0 || n === 0) {
    return true;
  } else {
    return false;
  }
};
