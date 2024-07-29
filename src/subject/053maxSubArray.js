/**
 * @description
 * 暴力解法  穷举所有的子序列，并不断刷新子序列的最大值。
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let ans = nums[0];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      let temp = 0;
      for (let t = i; t <= j; t++) {
        temp += nums[t];
      }
      ans = Math.max(ans, temp);
    }
  }
  return ans;
};

const nums = [-2, 1, -3, 4, -1, 2, 1, 4, -5, 4];
console.log(maxSubArray(nums));
