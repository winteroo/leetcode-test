/**
 * @description : 罗马数字  使用贪心算法，尽量用大的数字去组合所求数字
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let index = 0;
  let romanNum = '';
  while (index < 13) {
    while (num >= nums[index]) {
      romanNum += romans[index];
      num -= nums[index];
    }
    index++;
  }
  return romanNum;
};

console.log(intToRoman(3));