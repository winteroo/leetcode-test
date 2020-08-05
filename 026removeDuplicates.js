/**
 * @description
 * 双指针   快慢指针
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // 剪枝，当数组的长度为0或1时，直接返回数组的长度
  if (nums.length < 2) return nums.length;
  // 设慢指针指向数组的第一项
  let left = 0;
  // 快指针指向数组的第二项
  let right = 1;
  // 循环停止条件，快指针遍历完了数组
  while (right < nums.length) {
    if (nums[left] === nums[right]) {
      // 当快指针和慢指针处的数据相同
      // 则不处理，快指针向前进一位
      right++;
    } else {
      // 当快慢指针处的数据不相同时
      // 将慢指针后一位的数据更改为快指针处的数据
      // 同时快慢指针同时向前进一位
      nums[left + 1] = nums[right];
      right++;
      left++;
    }
  }
  // 最后返回慢指针 + 1 就是更新后数组的长度
  // 同时数组数据得到了更新
  return left + 1;
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));
