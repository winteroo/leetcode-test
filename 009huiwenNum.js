/**
 * @description 判断数字是不是回文数字,数字转字符串反转法
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // 处理负数和非0但是以0位结尾的数字
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
  let str = x.toString();
  let reverseStr = str.split('').reverse().join('');
  if (str === reverseStr) return true;
  return false;
};

console.log(isPalindrome(123421));

/**
 * @description 判断数字是不是回文数字，数字转字符串前后对比法
 * @param {number} x
 * @return {boolean}
 */
var isPalindromeElse = function (x) {
  // 处理负数和非0但是以0位结尾的数字
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
  let str = x.toString();
  let mid = parseInt(str.length / 2);
  let i = 0;
  while (i < mid) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    };
    i++;
  };
  return true;
};

console.log(isPalindromeElse(1234554321));

/**
 * @description 判断数字是不是回文数字，数字前后对比法
 * @param {number} x
 * @return {boolean}
 */
var isPalindromeOther = function (x) {
  // 处理负数和非0但是以0位结尾的数字
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
  // 反转的数字
  let reverseNum = 0;
  // 不断将数字进行末尾反转，同时改变原数字的大小
  while (x > reverseNum) {
    reverseNum = reverseNum * 10 + x % 10;
    x = parseInt(x / 10);
  }
  return x === reverseNum || parseInt(reverseNum / 10) === x;
};

console.log(isPalindromeOther(121));