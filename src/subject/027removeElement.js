/**
 * @description
 * 双指针
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let left = -1;
  let right = 0;
  const len = nums.length;
  while (right < len) {
    if (nums[right] === val) {
      // 相同，指针前进
      right++;
    } else {
      // 不同 则将快指针的数据放到慢指针后一位处
      // 同时增加两个指针
      nums[left + 1] = nums[right];
      left++;
      right++;
    }
  }
  return left + 1;
};

const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 0;
// console.log(removeElement(nums, val));

/**
 * @description
 * 交换末尾数字
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElementElse = function (nums, val) {
  let i = 0;
  let ans = nums.length;
  while (i < ans) {
    if (nums[i] === val) {
      // 当相同时，将当前数据和当前ans - 1处的数据交换
      // 并且ans--
      nums[i] = nums[ans - 1];
      ans--;
    } else {
      // 如果不同则指针向前进
      i++;
    }
  }
  return ans;
};

console.log(removeElementElse(nums, val));
console.log(removeElement(nums, val));
