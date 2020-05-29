/**
 * @description 寻找到了第一个解即返回
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  backtrack(board, 0, 0);
  return board;

  function backtrack(board, i, j) {
    let m = 9,
      n = 9;
    if (i === m) {
      return true;
    }
    if (j === n) {
      return backtrack(board, i + 1, 0)
    }
    if (board[i][j] !== '.') {
      return backtrack(board, i, j + 1);
    }
    for (let k = 1; k <= 9; k++) {
      if (!isValid(board, i, j, k.toString())) continue;

      board[i][j] = k.toString();
      if (backtrack(board, i, j + 1)) {
        return true;
      }
      board[i][j] = '.'
    }
    return false;
  }

  function isValid(board, i, j, str) {
    for (let k = 0; k < 9; k++) {
      // 判断横行没有重复
      if (board[i][k] === str) return false;
      if (board[k][j] === str) return false;
      if (
        board[
          Math.floor(i / 3) * 3 + Math.floor(k / 3)
        ][
          Math.floor(j / 3) * 3 + k % 3
        ] === str
      ) {
        return false
      };
    }
    return true;
  }
};




/**
 * @description 利用标准回溯算法
 * @param {character[][]} board
 * @return {void}
 */
var solveSudokuElse = function (board) {
  let res = [];
  backtrack(board, 0, 0);
  return res;

  function backtrack(board, i, j) {
    let m = 9,
      n = 9;
    // 说明已经找到一个解，将解压入结果中
    if (i === m) {
      return res.push(board);
    }
    // 说明一行已经找到解，进行下一行
    if (j === n) {
      backtrack(extend(board), i + 1, 0)
      return;
    }
    // 跳过已经填写了数字的位置
    if (board[i][j] !== '.') {
      backtrack(extend(board), i, j + 1);
      return;
    }
    // 标准回溯算法
    for (let k = 1; k <= 9; k++) {
      // 不符合条件的筛掉
      if (!isValid(board, i, j, k.toString())) continue;
      board[i][j] = k.toString();
      backtrack(extend(board), i, j + 1)
      board[i][j] = '.'
    }
  }
  // 深拷贝
  function extend(source) {
    let target = null;
    if (typeof source === 'object') {
      target = Array.isArray(source) ? [] : {}
      for (let key in source) {
        if (source.hasOwnProperty(key)) {
          if (typeof source[key] !== 'object') {
            target[key] = source[key]
          } else {
            target[key] = extend(source[key])
          }
        }
      }
    } else {
      target = source
    }
    return target
  }

  function isValid(board, i, j, str) {
    for (let k = 0; k < 9; k++) {
      // 判断横行没有重复
      if (board[i][k] === str) return false;
      if (board[k][j] === str) return false;
      if (
        board[
          Math.floor(i / 3) * 3 + Math.floor(k / 3)
        ][
          Math.floor(j / 3) * 3 + k % 3
        ] === str
      ) {
        return false
      };
    }
    return true;
  }
};

// let board = [
//   [".", ".", ".", "6", "2", "5", "3", "1", "."],
//   ["5", ".", ".", ".", ".", ".", ".", ".", "6"],
//   [".", ".", ".", "4", "3", ".", ".", ".", "5"],
//   ["6", "1", ".", "8", ".", ".", ".", ".", "."],
//   [".", ".", "8", "5", "4", ".", "1", ".", "."],
//   [".", ".", ".", ".", "1", ".", ".", "6", "3"],
//   [".", "8", ".", "1", "7", ".", ".", ".", "."],
//   [".", "4", ".", ".", ".", ".", ".", "3", "."],
//   ["2", ".", "1", "3", "5", "4", ".", ".", "."]
// ]

let board = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]

console.log(solveSudokuElse(board));