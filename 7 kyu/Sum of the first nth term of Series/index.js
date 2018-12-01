// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:
// SeriesSum(1) => 1 = "1.00"
// SeriesSum(2) => 1 + 1/4 = "1.25"
// SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"
// NOTE: In PHP the function is called series_sum().

// FUNDAMENTALSLOOPSCONTROL FLOWBASIC LANGUAGE FEATURESARITHMETICMATHEMATICSALGORITHMSNUMBERSSEQUENCESARRAYS

//My solution
function SeriesSum(n) {
  if (n === 0) {
    return '0.00';
  } else if (n === 1) {
    return '1.00';
  } else if (n === 2) {
    return '1.25';
  } else {
    let result = 1.25;
    let x = 4;
    for (let i = 2; i < n; ++i) {
      result += 1 / (x += 3);
    }
    return result.toFixed(2);
  }
}
