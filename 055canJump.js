/**
 * 是否可到达数组的最后一个位置
 * 贪心算法
 * @param {Array} nums
 */
const canJump = (nums) => {
  if (nums.length === 0) return true;
  let max = 0;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    // 保证当前遍历的对象不超过可跳跃的最大值
    if (i <= max) {
      max = Math.max(i + nums[i], max);
      if (max >= len - 1) {
        return true;
      }
    } else {
      return false;
    }
  }
};

const nums = [2, 0, 0];

console.log(canJump(nums));
