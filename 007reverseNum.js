/** 数字反转: 最大数字2的31次方减1--最小数字-2的31次方
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let numStr = '';
  let num = '';
  let max = Math.pow(2, 31);
  if (x >= 0) {
    numStr = x.toString().split('').reverse().join('');
    num = Number(numStr);
    if (num > max - 1) {
      num = 0;
    }
    return num;
  } else {
    numStr = (-x).toString().split('').reverse().join('');
    num = Number(numStr);
    if (num > max) {
      num = 0
    }
    return -num;
  }
};

console.log(reverse(1534236469)) 