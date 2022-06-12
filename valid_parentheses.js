// Prompt:
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.

// An input string is valid if:
  // Open brackets must be closed by the same type of brackets.
  // Open brackets must be closed in the correct order.

const isValid = s => {
  let string = s.split('');
  if (string.length % 2 !== 0) return false;
  let stack = [];
  const pairs = { '(': ')', '[': ']', '{': '}' };

  for (let i = 0; i < string.length; i++) {
    let curr = string[i];
    if (Object.keys(pairs).includes(curr)) {
      stack.push(curr);
    } else {
      if (pairs[stack.at(-1)] === curr) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  if (stack.length) return false;
  return true;
};

let string = '()'
console.log( isValid(string) ); //true
string = '()[]{}'
console.log( isValid(string) ); //true
string = '(]'
console.log( isValid(string) ); //false