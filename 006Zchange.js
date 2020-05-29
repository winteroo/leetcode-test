// 利用二维数组进行z字变化
var convert = function (s, numRows) {
  // 一行输出去
  if (numRows === 1) {
    return s
  }
  // 创建二维数组
  let result = [];
  for (let i = 0; i < numRows; i++) {
    result[i] = [];
  }
  // 创建最终字符串
  let resultStr = '';
  // 是否是向下寻找
  let down = true;
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    result[j].push(s[i]);
    if (down) {
      j++;
    } else {
      j--;
    };
    // 向下到达了numRows的深度，掉头
    if (j === numRows) {
      j -= 2;
      // 判断是否已经到顶(两行的情况)
      j === 0 ? down = true : down = false;
    } else if (j === 0) {
      down = true;
    }
  }
  console.log(result);
  for (let t = 0; t < numRows; t++) {
    resultStr += result[t].join('')
  }
  return resultStr;
}

// let s = 'LEETCODEISHIRING';
let s = 'ABCD';
console.log(convert(s, 3));