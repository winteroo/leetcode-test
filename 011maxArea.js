/**
 * @description 寻找数组中最大的面积：暴力法
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const newArea = Math.min(height[i], height[j]) * (j - i);
      max = Math.max(max, newArea);
    }
  }
  return max;
};

const arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(arr));

/**
 * @description 寻找数组中最大的面积：双指针法
 * 双指针法的理解：
 * 1、初始left 和 right 指针分别指向数组的最左和最右位置
 * 2、首先计算left和right位置的最大面积，与当前最大面积进行比较，取较大的面积
 * 3、判断当前的left和right处的值的大小，如果height[left] < height[right],说明当前以left位置为起点的
 * 最大面积即为right，因为right已经是最右的位置，高度由height[left]决定，距离越远，面积越大，所以left++,
 * 判断后面的面积，重复执行算法，同理，当height[left] > height[right],right--
 * 4、不断更新max的值，最后当left >= right 时，循环结束，返回max
 * @param {number[]} height
 * @return {number}
 */
var maxAreaElse = function (height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while (right > left) {
    const minHeight = Math.min(height[left], height[right]);
    max = Math.max(minHeight * (right - left), max);
    height[left] > height[right] ? right-- : left++;
  }
  return max;
};

console.log(maxAreaElse(arr));
