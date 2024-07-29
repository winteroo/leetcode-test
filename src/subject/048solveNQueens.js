var solveNQueens = function (n) {
  const res = [];
  // 初始化n*n棋盘，填满 .
  const board = [];
  for (let i = 0; i < n; i++) {
    board.push(new Array(n).fill('.'));
  }
  // 从第1行开始
  backtrack(board, 0, res);
  return res;
};

function backtrack (board, row, res) {
  // 已经遍历完 0~n-1行， 符合条件
  if (row === board.length) {
    const arr = [];
    for (const row of board) {
      arr.push(row.join(''));
    }
    return res.push(arr);
  }

  const n = board.length;
  // 遍历该行的每一列
  for (let col = 0; col < n; col++) {
    // 跳过不合法排列
    if (!isValid(board, row, col)) continue;

    board[row][col] = 'Q'; // 做选择
    backtrack(board, row + 1, res); // 进入下一层
    board[row][col] = '.'; // 撤销选择
  }
}

/**
 * 棋盘指定位置放置皇后是否合法
 * @param {*} board
 * @param {*} row
 * @param {*} col
 */
function isValid (board, row, col) {
  const n = board.length;
  // 判断同列
  for (let i = 0; i < n; i++) {
    if (board[i][col] === 'Q') {
      return false;
    }
  }

  // 判断斜率为1的 对角线是否有冲突, 只用算上方，下方还没开始填充不用管
  for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
    if (board[i][j] === 'Q') {
      return false;
    }
  }
  // 判断斜率为-1的 对角线是否有冲突
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === 'Q') {
      return false;
    }
  }
  return true;
}

console.log(solveNQueens(4));
