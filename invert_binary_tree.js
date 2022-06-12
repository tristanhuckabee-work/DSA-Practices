// Prompt:
// Given the root of a binary tree, invert the tree, and return its root.

// With Recursion
var invertTree = function(root) {
  if ( root ) {
      let right = invertTree(root.right);
      let  left = invertTree(root.left);
      root.right= left;
      root.left = right;
  }
  return root;
};

// With Iteration
/*
var invertTree = function(root) {
  if ( root ) {
      let queue = [root];
      
      while (queue.length) {
          let curr = queue.shift();
          let temp = curr.left
          
          curr.left = curr.right;
          curr.right = temp;
          
          if (curr.right !== null) queue.push(curr.right);
          if (curr.left  !== null) queue.push(curr.left );
      }
  }
  return root;
};
*/

let root = [4,2,7,1,3,6,9];
console.log( invertTree(root) ) // [4,7,2,9,6,3,1]
root = [2,1,3];
console.log( invertTree(root) ) // [2,3,1]
root = [];
console.log( invertTree(root) ) // []


