/**
 * @description:
 * 比较当前单个字符对应的数值与其后的字符对应的数值的大小，
 * 大于后者，则将当前字符对应的数值加到num上，
 * 小于后者，则将当前字符对应的数值减到num上。
 * 注意处理最后的边界，防止i + 1 溢出字符串大小，
 * 最后的字符肯定是加到num上的，单独处理。
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let romanObj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  if (s.length === 1) return romanObj[s];
  let i = 0;
  let num = 0;
  let len = s.length - 1;
  while (i < len) {
    if (romanObj[s[i]] >= romanObj[s[i + 1]]) {
      num += romanObj[s[i]];
    } else {
      num -= romanObj[s[i]];
    };
    i++;
  }
  num += romanObj[s[len]];
  return num;
};

console.time('函数执行时间');
console.log(romanToInt('MCMXCIV'));
console.timeEnd('函数执行时间');


/**
 * @description
 * 枚举的map数据包含特殊的4，9等，
 * 每次遍历两个字符，在map中查找是否存在该值，
 * 如果存在，则取这两个字符对应的数值，加上，
 * 如果不存在，则取单个字符对应的数值，加上，
 * 注意处理 i+2 的边界 问题
 * @param {string} s
 * @return {number}
 */
var romanToIntElse = function (s) {
  const map = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
  };
  let i = 0;
  let num = 0;
  let len = s.length;
  while (i < len) {
    let nextNext = map[s.slice(i, i + 2)];
    let next = map[s.slice(i, i + 1)];
    if (i + 2 <= len && nextNext) {
      num += nextNext;
      i += 2;
    } else {
      num += next;
      i++;
    }
  }
  return num;
}

console.time('函数执行时间1');
console.log(romanToIntElse('MCMXCIV'));
console.timeEnd('函数执行时间1');



/** @description
 * 将hash表转化为switch函数，
 * 据说是可以快点，
 * 实际效果：hash:184ms,switch:180ms
 * @param {string} s
 * @return {number}
 */
var romanToIntOther = function (s) {
  function getValue(ch) {
    switch(ch) {
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return 0;
    }
  }
  if (s.length === 1) return getValue(s);
  let i = 0;
  let num = 0;
  let len = s.length - 1;
  while (i < len) {
    if (getValue(s[i]) >= getValue(s[i + 1])) {
      num += getValue(s[i]);
    } else {
      num -= getValue(s[i]);
    };
    i++;
  }
  num += getValue(s[len]);
  return num;
};

console.time('函数执行时间2');
console.log(romanToIntOther('MCMXCIV'));
console.timeEnd('函数执行时间2');


