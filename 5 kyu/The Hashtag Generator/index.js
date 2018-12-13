// The marketing team is spending way too much time typing in hashtags.
// Let's help them with out own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

//My solution

function generateHashtag(str) {
  const arrUpper = [];
  const newstr = str.split(' ');
  const strFiltered = newstr.filter(word => word.length > 0);
  strFiltered.forEach(letter => {
    const strUpper = letter.charAt(0).toUpperCase() + letter.slice(1);
    arrUpper.push(strUpper);
  });
  arrUpper.unshift('#');
  const result = arrUpper.join('');
  if (result.length > 140 || result.length === 1) {
    return false;
  } else {
    return result;
  }
}
