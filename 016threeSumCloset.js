/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let sum = 0;
  let ans = Math.abs(nums[0] + nums[1] + nums[2] - target);
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let t = j + 1; t < nums.length; t++) {
        res = Math.abs(nums[i] + nums[j] + nums[t] - target);
        if (res <= ans) {
          sum = nums[i] + nums[j] + nums[t];
          if (res === 0) return sum;
          ans = Math.abs(nums[i] + nums[j] + nums[t] - target);
        }
      }
    }
  }
  return sum;
};

let nums = [1, 2, 4, 8, 16, 32, 64, 128];
let target = 82;
console.log(threeSumClosest(nums, target));


/**
 * @description
 * 排序 + 双指针
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosestElse = function (nums, target) {
  let sortNums = nums.sort((a, b) => a - b);
  let ans = sortNums[0] + sortNums[1] + sortNums[nums.length - 1];
  for (let i = 0; i < sortNums.length - 2; i++) {
    let left = i + 1;
    let right = sortNums.length - 1;
    while (left < right) {
      let sum = sortNums[i] + sortNums[left] + sortNums[right]
      if (Math.abs(sum - target) <= Math.abs(ans - target)) {
        ans = sum;
        if (sum - target === 0) return sum;
      }
      sum > target ? right-- : left++;
    }
  }
  return ans;
}

console.log(threeSumClosestElse(nums, target));