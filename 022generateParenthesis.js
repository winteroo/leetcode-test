// /**
//  * @description
//  * DFS(depth first search) 
//  * 深度优先搜索
//  * @param {number} n
//  * @return {string[]}
//  */
// var generateParenthesis = function (n) {
//   let res = []
//   let dfs = (s, left, right) => {
//     // 递归的结束条件
//     // 当左括号的数量和右括号的数量同时满足条件
//     if (left === n && right === n) {
//       res.push(s);
//       return
//     }
//     // 当左括号的数量少于n时
//     // 递归调用，向当前字符串添加左括号
//     if (left < n) {
//       dfs(s + '(', left + 1, right);
//     }
//     // 当左括号的数量大于右括号的数量
//     // 添加右括号进行遍历
//     if (right < left) {
//       dfs(s + ')', left, right + 1);
//     }
//   }
//   // 从头开始递归调用
//   dfs('', 0, 0)
//   return res
// };




/**
 * @description
 * 回溯算法
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = []
  let strs = ['(', ')'];
  backtrack([], n, 0, 0);
  return res;

  function backtrack(tempStr, n, left, right) {
    if (left === n && right === n) {
      res.push(tempStr.join(''));
      return;
    }
    if (right > left) {
      return;
    }
    if (right > n || left > n) {
      return;
    }
    tempStr.push('(');
    backtrack(tempStr, n, left + 1, right);
    tempStr.pop();

    tempStr.push(')');
    backtrack(tempStr, n, left, right + 1);
    tempStr.pop();
  }
};

let n = 3;
console.log(generateParenthesis(n));