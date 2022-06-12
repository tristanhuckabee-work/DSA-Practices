// Prompt:
// A phrase is a palindrome if,
// after converting all uppercase letters into lowercase letters and removing all
// non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

const isPalindrome = s => {
  const string = s.replace(/\W|\_/gi, '').toLowerCase();
  const reverse= string.split('').reverse().join('').toLowerCase();
  
  return string === reverse ? true : false;
};

let string = 'A man, a plan, a canal: Panama';
console.log( isPalindrome(string) ); // true
string = 'race a car';
console.log( isPalindrome(string) ); // false
string = ' ';
console.log( isPalindrome(string) ); // true