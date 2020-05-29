/**
 * 滑动窗口
 * left和right指针相聚needle.length
 * 遍历haystack的此区间内的字符串和needle的关系
 * 相同 则返回left
 * 不相同则指针同时++
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle) return 0;
  let left = 0;
  let right = needle.length;
  while (right <= haystack.length) {
    let str = haystack.slice(left, right)
    if (str === needle) {
      return left;
    } else {
      left++;
      right++;
    }
  }
  return -1;
};

let haystack = "a",
  needle = "a";
  console.log(strStr(haystack, needle));