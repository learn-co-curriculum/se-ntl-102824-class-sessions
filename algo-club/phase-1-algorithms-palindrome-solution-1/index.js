function isPalindrome(word) {
  // Write your algorithm here
  // const reversed = word.split('').reverse().join('');
  // return reversed === word
  for (let i = 0; i < word.length/2; i++) {
    const start = word[i], end = word[word.length - 1 - i]
    if (start !== end) {
      return false
    }
  }
  return true
}

/* 
  Add your pseudocode here

  start iterating through the word
    create vars pointing to first char and last char
    if chars at both indices are not equal, it is NOT a palindrom
    increment iterator and move first and last in by 1
  if iterators meet and there's no false, then it IS a palindrome
*/

/*
  Add written explanation of your solution here
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
  console.log("=>", isPalindrome("a"));
}

module.exports = isPalindrome;
