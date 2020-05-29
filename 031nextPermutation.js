/**
 * @description
 * 1.从数组的末尾寻找第一对升序排列的值i,j
 * 2.在j后面的数组现在肯定都是降序排列的，包括j自己
 * 3.此时，在[j, nums.length - 1]的区间从后往前寻找第一个
 *   大于nums[i]的位置k，注意这里一定是大于，等于不可以
 * 4.交换nums[i] 和 nums[k] 处的值
 * 5.此时，区间[j, nums.length]区间内肯定是降序排列的
 *   所以此时需要将此区间内的数组改成降序排列才能得到更小的值
 * 6.因为[j, nums.length]区间内的数组是降序，所以
 *   收尾交换数据即可完成升序排列
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  if (nums.length < 2) return nums;
  let len = nums.length;
  let i = len - 2;
  let j = len - 1;
  let k = len - 1;
  // 寻找从数组末尾开始的第一个升序的i,j
  while (i >= 0 && nums[i] >= nums[j]) {
    i--;
    j--;
  }
  // 说明数组是降序排列的
  if (i < 0) return nums.sort((a, b) => a - b);
  // 从数组末尾寻找第一个比nums[i]大的值
  // 注意边界和相等问题
  while (k > i && nums[i] >= nums[k]) {
    k--;
  }
  // 交换i，k处的值
  swap(nums, i, k);
  // j后的数据现在肯定是降序排列,转化为升序排列
  // 收尾依次交换位置即可
  while (len > j) {
    swap(nums, j, len - 1);
    len--;
    j++;
  }

  function swap (nums, i, k) {
    let temp = nums[i];
    nums[i] = nums[k];
    nums[k] = temp;
  }

  return nums;
};

// let nums = [1,2,3,8,5,7,6,4];
let nums = [5,1,1];
console.log(nextPermutation(nums));