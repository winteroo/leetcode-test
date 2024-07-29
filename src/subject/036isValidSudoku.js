/**
 * @description
 * 创建三组数据，分别存储行数据、列数据、方块容器
 * 每个容器的对应数组中存储着hash表
 * 每次都将这次遍历的数据存储到对应容器的对应hash中,均标记为1
 * {3:1,5:1,...}
 * 当在某个容器中发现了对应的key值为1，则说明该数字在该容器中重复
 * 则不是数独数组，返回false
 * 循环结束后，返回true
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // 创造行容器、列容器、方块容器
  const rows = [];
  const cols = [];
  const boxes = [];
  // i => rows j => cols
  for (let i = 0; i < 9; i++) {
    // 初始化行map
    rows[i] = {};
    for (let j = 0; j < 9; j++) {
      const key = board[i][j];
      // 行数据
      if (rows[i][key] && key !== '.') {
        return false;
      } else {
        rows[i][key] = 1;
      }
      // 列数据
      cols[j] = cols[j] || {};
      if (cols[j][key] && key !== '.') {
        return false;
      } else {
        cols[j][key] = 1;
      }
      // 方格数据
      // boxes的index,三种写法均为先下取整
      const boxIndex = ((i / 3) | 0) * 3 + (j / 3) | 0;
      // let boxIndex = ((~~(i / 3)) * 3) + (~~(j / 3));
      // let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      console.log(boxIndex);
      boxes[boxIndex] = boxes[boxIndex] || {};
      if (boxes[boxIndex][key] && key !== '.') {
        return false;
      } else {
        boxes[boxIndex][key] = 1;
      }
    }
  }
  return true;
};

const board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9']
];

console.log(isValidSudoku(board));
