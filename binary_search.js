// Prompt:
// Given an array of integers nums which is sorted in ascending order,
// and an integer target, write a function to search target in nums.
// If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

// const search = (nums, target) => nums.includes(target) ? nums.indexOf(target) : -1;
const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  
  while ( left <= right ) {
      let pivot = Math.floor(left + ( right - left ) / 2);
      if ( nums[pivot] === target ) {
          return pivot;
      } else if ( nums[pivot] > target ) {
          right = pivot - 1;
      } else {
          left  = pivot + 1;
      }
  }
  return -1;
}

let nums = [-1,0,3,5,9,12];
let target = 9;

console.log( search(nums, target) ); // 4
target = 3;
console.log( search(nums, target) ); // -1