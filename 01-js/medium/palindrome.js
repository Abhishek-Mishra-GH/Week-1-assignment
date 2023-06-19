/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let rv = true;
  let s = str.toLowerCase().replace(/[^\w]/g, '');

  let i = 0;
  let j = s.length-1;
  while (i < j) {
    if (s[i] != s[j]) {
      rv = false;
      break;
    }
    i++;
    j--;
  }

  return rv;
}

module.exports = isPalindrome;