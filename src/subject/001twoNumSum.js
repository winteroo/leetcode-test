/**
 * @description 两数之和
 * 利用一遍hash表处理
 * 原理：一边遍历map表，一遍构建nums[i]:i形式的map
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    // 获取差值为map的key
    const key = target - nums[i];
    // 判断key值是否存在与hash表中，如果存在，则说明找到了那两个值，
    // 如果不存在，则设置hash表中nums[i]:i键值对
    if (map[key] !== undefined) {
      return [map[key], i];
    } else {
      map[nums[i]] = i;
    }
  }
};

const nums = [2, 7, 8, 9, 10];
console.log(twoSum(nums, 9));
