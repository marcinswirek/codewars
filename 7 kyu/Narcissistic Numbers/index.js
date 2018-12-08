// A Narcissistic Number is a number of length n in which the sum of its digits to the power of n is equal to the original number. If this seems confusing, refer to the example below.

// Ex: 153, where n = 3 (number of digits in 153)
// 13 + 53 + 33 = 153

// Write a method is_narcissistic(i) (in Haskell: isNarcissistic :: Integer -> Bool) which returns whether or not i is a Narcissistic Number.

//FUNDAMENTALS

// Solution

function isNarcissistic(n) {
  const nToArray = n.toString().split('');
  const nPower = nToArray.length;
  let number = 0;
  let result = 0;
  nToArray.forEach(num => {
    num = num * 1;
    number = Math.pow(num, nPower);
    result += number;
  });
  console.log(result);
  return result === n ? true : false;
}
