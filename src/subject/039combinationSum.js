/** TODO
 * @description
 * 回溯算法，还没搞懂
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const n = candidates.length;
  const res = [];
  const tmpPath = [];
  candidates = candidates.sort((a, b) => a - b);
  const backtrack = (tmpPath, target, start) => {
    if (target === 0) {
      res.push(tmpPath);
      return;
    }
    for (let i = start; i < n; i++) {
      if (target < candidates[i]) break;
      tmpPath.push(candidates[i]);
      backtrack(tmpPath.slice(), target - candidates[i], i);
      tmpPath.pop();
    }
  };
  backtrack(tmpPath, target, 0);
  return res;
};

const candidates = [2, 3, 6, 7];
const target = 7;
console.log(combinationSum(candidates, target));
