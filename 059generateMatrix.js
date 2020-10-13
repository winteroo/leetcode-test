/**
 * @desc
 * 设定四个边界，定义四个边界的填充方向和填充数字，不断缩小边界直至完成
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = (n) => {
  // 创建二维数组
  const ans = new Array(n);
  for (let i = 0; i < n; i++) {
    ans[i] = new Array(n).fill(-1);
  }
  let l = 0; // 左边界
  let r = n - 1; // 右边界
  let t = 0; // 上边界
  let b = n - 1; // 下边界
  let num = 1;
  const tar = n * n;
  while (num <= tar) {
    // 从上部边界开始填充数字，填充完该行后，向下走，上边界即增加1
    for (let x = l; x <= r; x++) {
      ans[t][x] = num++;
    }
    t++;
    // 右侧向下的过程，填充右侧一竖列，完成后，右侧边界即减少1
    for (let y = t; y <= b; y++) {
      ans[y][r] = num++;
    }
    r--;
    // 底部一行从右向左的过程层，填充当前底部边界一行，完成后，底部边界减1
    for (let o = r; o >= l; o--) {
      ans[b][o] = num++;
    }
    b--;
    // 左侧边界从下往上的过程，填充完当前边界最左侧一行，完成后，左侧边界加1
    for (let z = b; z >= t; z--) {
      ans[z][l] = num++;
    }
    l++;
  }
  return ans;
};

console.log(generateMatrix(10));
