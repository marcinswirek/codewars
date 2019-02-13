// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// FUNDAMENTALS

//My solution

const removeExclamationMarks = s => {
  const result = [];
  [...s].map(item => (item !== '!' ? result.push(item) : null));
  return result.join('');
};

//Other solutions

function removeExclamationMarks(s) {
  return s.replace(/!/gi, '');
}

function removeExclamationMarks(s) {
  return s.split('!').join('');
}
