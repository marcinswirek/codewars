// Get the number n (n>0) to return the reversed sequence from n to 1.

// Example : n=5 >> [5,4,3,2,1]

// FUNDAMENTALS

//My solutionm

const reverseSeq = n => {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr.reverse();
};

//Other solutions
const reverseSeq = n => {
  return Array(n)
    .fill(0)
    .map((e, i) => n - i);
};

const reverseSeq = length => Array.from({ length }, () => length--);
