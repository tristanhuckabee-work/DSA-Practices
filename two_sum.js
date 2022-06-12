// Prompt:
// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// You can return the answer in any order.

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let foundArr = []
    let curr = nums[i]

    for (let j = i + 1; j < nums.length; j++) {
      let inner = nums[j]

      if (inner + curr === target) foundArr = [i, j]
    }

    if (foundArr.length) return foundArr;
  };
};

let nums = [2,7,11,15];
let target = 9;
console.log( twoSum(nums, target) ); // [0,1]
nums = [3,2,4];
target = 6;
console.log( twoSum(nums, target) ); // [1,2]
nums = [3,3];
console.log( twoSum(nums, target) ); // [0,1]