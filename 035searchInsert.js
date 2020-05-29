/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if(nums.length === 0) return 0;
  let len = nums.length - 1;
  let left = 0;
  let right = len;
  let mid = 0;
  while (left <= right) {
    mid = left + Math.ceil((right - left) / 2); 
    if (nums[mid] === target) {
      return mid;
    } else if(nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }
  return left;
};


let nums = [1,3,5,6]
let target = 7;

console.log(searchInsert(nums, target));