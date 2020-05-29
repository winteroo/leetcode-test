/**
 * @description
 * 不断做减法
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  // 先取整
  let dividendAbs = Math.abs(dividend);
  let divisorAbs = Math.abs(divisor);
  let flag1 = true;
  let flag2 = true;
  dividendAbs === dividend ? flag1 = true : flag1 = false;
  divisorAbs === divisor ? flag2 = true : flag2 = false;
  let i = 0;
  let remainder = divisorAbs;
  while (dividendAbs >= remainder) {
    dividendAbs -= divisorAbs;
    i++;
  }
  if (flag1 === flag2){
    return i > (Math.pow(2, 31) - 1) ? Math.pow(2, 31) : i;
  } else {
    return -i;
  }
};


let dividend = 0;
let divisor = 3;
console.log(divide(dividend, divisor));