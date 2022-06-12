// Prompt:
//Given two strings s and t, return true if t is an anagram of s, and false otherwise.
//An Anagram is a word or phrase formed by rearranging the letters of a
//different word or phrase, typically using all the original letters exactly once.

const isAnagram = (s, t) => {
  if ( s.split('').sort().join('') === t.split('').sort().join('') ) {
    return true;
  } else {
    return false;
  }
}

let first = 'anagram';
let second= 'nagaram';
console.log( isAnagram(first, second) ); // true
first = 'rat';
second= 'car';
console.log( isAnagram(first, second) ); // false