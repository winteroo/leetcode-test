/**
 * @description  合并区间
 * 当前遍历的区间的左值小于或等于目前的右指针，
 * 说明目前的[left, right]区间与当前遍历的区间存在重叠，合并区间，
 * 更新右指针，同时继续遍历。
 * 当条件判断为否时，
 * 说明目前的[left, right]区间已经当前遍历值无重叠区间，
 * 将[left, right]压入结果栈中，
 * 同时更新左指针和右指针为当前遍历区间的前后值，继续循环
 * 当循环结束时，会存在最后一组[left, right]，此时将最后这段区间压入结果栈即可。
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = (intervals) => {
  if (intervals.length === 0) return [];
  // 排序
  const sortIn = intervals.sort((a, b) => a[0] - b[0]);
  // 将左指针赋值第一个数据的
  let left = sortIn[0][0];
  let right = sortIn[0][1];
  let i = 1;
  const ans = [];
  while (i < sortIn.length) {
    if (sortIn[i][0] <= right) {
      right = Math.max(sortIn[i][1], right);
      i++;
    } else {
      ans.push([left, right]);
      left = sortIn[i][0];
      right = sortIn[i][1];
      i++;
    }
  }
  ans.push([left, right]);
  return ans;
};

const intervals = [
  [2, 6],
  [15, 20],
  [1, 3],
  [10, 12],
  [8, 13],
  [17, 19]
];
console.log(merge(intervals));
