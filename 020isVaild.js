/**
 * @description
 * 如果存在开字符 => ( { [,
 * 则入栈等待
 * 否则 出栈比较
 * 最后查看栈的高度
 * 如果存在字符 则说明这个字符无法匹配 返回false
 * 如果不存在字符 则说明全部匹配  返回true
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s % 2) return false;
  let stack = [];
  let map = {
    '{': '}',
    '(': ')',
    '[': ']'
  }
  for (let i = 0; i < s.length; i++) {
    let str = s.charAt(i);
    if (map[str]) {
      stack.push(str);
    } else {
      let popS = stack.pop();
      if (map[popS] !== str) return false;
    }
  }
  return stack.length === 0;
};

/**
 * @description
 * 不断替换当前字符串
 * 如果当前替换的字符串和替换之前的字符串相同
 * 则说明无法替换  返回false
 * 否则,当循环结束时，说明字符串全部替换完成
 * 返回true
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s % 2) return false;
  while (s.length) {
    let temp = s;
    s = s.replace('()', '');
    s = s.replace('[]', '');
    s = s.replace('{}', '');
    if (s === temp) return false;
  }
  return true;
};

let s = '()'
console.log(isValid(s));