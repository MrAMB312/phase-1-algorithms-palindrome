function isPalindrome(word) {
  const wordArray = word.split('');
  wordArray.reverse();
  const wordBackwards = wordArray.join('');
  return word === wordBackwards;
}

/* 

1. define variable for "word" backwards (wordBackwards)
  - 1a. split "word" into an array, turning each word into an element
  - 1b. reverse the order of the new word array
  - 1c. rejoin the individual letters and define as variable

2. write boolean expression for word and wordBackwards

*/

/*

Initially, I knew the argument "word" would have to be read backwards and compared
against its original form using the strict equality operator. I wasn't entirely sure
how the initial string could be interpreted backwards, but with a quick Google search,
the three steps above (1a, 1b, and 1c in my pseudocode) became clear.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("civic"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("coffee"));
}

module.exports = isPalindrome;
