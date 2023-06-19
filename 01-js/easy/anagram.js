/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  let s1 = str1.toLowerCase();
  let s2 = str2.toLowerCase();

  let a1 = getUniqueArray(s1);
  let a2 = getUniqueArray(s2);
  
  const g = a1.length > a2.length ? a1.length : a2.length; 

  let check = true;
  for(let i = 0; i < g; i++) {
    if(a1[i] != a2[i]) {
      check = false;
      break;
    }
  }

  return check;
}

function getUniqueArray(str) {
  let rv = [];
  for(let i = 0; i < str.length; i++) {
    let index = str.charCodeAt(i);
    if (rv[index] == undefined) rv[index] = 0;
    rv[index] += 1;
  }

  return rv;
}

module.exports = isAnagram;
// console.log(isAnagram('Act', 'cta'));