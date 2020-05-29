/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = findLeft(nums, target);
  let right = findRight(nums, target);
  return [left, right];
}

/**
 * @description
 * 找到目标值在数组中的左边界
 * 注意这里使用的是[left, right],
 * 两边都闭合的方式，需要注意
 * 1.循环结束条件 left <= right
 * 2.当找到目标值时区间向前进1位
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function findLeft(nums, target) {
  let left = 0;
  let right = nums.length - 1; // 注意
  while (left <= right) { // 注意
    let mid = left + Math.ceil((right - left) / 2);
    if (nums[mid] === target) {
      right = mid - 1; // 注意
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }
  if (left >= nums.length || nums[left] !== target) { // 注意
    left = -1;
  }
  return left;
}

/**
 * @description
 * 找到目标值在数组中的右边界
 * 注意这里使用的是[left, right],
 * 两边都闭合的方式，需要注意
 * 1.循环结束条件 left <= right
 * 2.当找到目标值时区间向后进1位
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function findRight(nums, target) {
  let left = 0;
  let right = nums.length - 1; // 注意
  while (left <= right) { // 注意
    let mid = left + Math.ceil((right - left) / 2);
    if (nums[mid] === target) {
      left = mid + 1; // 注意
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }
  if (right < 0 || nums[right] !== target) { // 注意
    right = -1;
  }
  return right;
}


let nums = [1, 2, 2, 4]
let target = 2;

console.log(searchRange(nums, target));