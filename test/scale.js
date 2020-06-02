/**
 * 10进制转换为任意进制
 * @param {Number} number 十进制数值 
 * @param {*} sys 要转换的进制
 */
function scale(number, sys) {
  let stack = [];
  let num = number;
  let rem;
  let binaryStr = '';
  while (num > 0) {
    rem = Math.floor(num % sys);
    stack.push(rem);
    num = Math.floor(num / sys);
  }
  return stack.reverse().join('');
}

/**
 * 任意进制转换为10进制
 * @param {String} str sys进制数字表示的字符串 
 * @param {*} sys 进制数
 */
function scaleten(str, sys) {
  let num = 0;
  for (let i = 0; i< str.length; i++) {
    num += Number(str.charAt(i)) * Math.pow(sys, str.length - i - 1);
  }
  return num;
}


let num = 550;
let base = 10;
console.log(scale(num, base));
console.log(scaleten(scale(num, base), base));