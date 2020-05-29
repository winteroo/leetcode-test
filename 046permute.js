/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [];
  let tempList = [];
  backtrack(result, tempList, nums);
  return result;
};

function backtrack(result, tempList, nums) {
  if (tempList.length === nums.length) {
    return result.push([...tempList]);
  }
  for (let i = 0; i < nums.length; i++) {
    if (tempList.indexOf(nums[i]) > -1) continue;
    tempList.push(nums[i]);
    console.log([...tempList]);
    backtrack(result, tempList, nums);
    tempList.pop();
  }
}


let nums = [1,1,2];
console.log(permute(nums));


/**
 * @description 求[1,n]集合中的k个数字组成的组合，不能重复
 * @param {Number} n 限制数字范围[1,n]
 * @param {Number} k 限制组合的数字个数
 */
function combine (n, k) {
  let result = [];
  let tempList = [];
  backtrackElse(result, tempList, 1, n, k);
  return result;
  function backtrackElse (result, tempList, start, n, k) {
    if (tempList.length === k) result.push([...tempList]);
    for (let i = start; i <= n; i++) {
      console.log([...tempList], i);
      if (tempList.indexOf(i) > -1 || tempList[0] > i) continue;
      tempList.push(i);
      if (tempList.length <= k) {
        backtrackElse(result, tempList, start + 1, n, k);
      }
      tempList.pop();
    }
  }
}

// console.log(combine(5,4));


// 回溯算法模板
// let result = [];
// function backtrack (路径, 选择, ...args) {
//   if (满足条件) {
//     result.push(路径)
//     return
//   }
//   for (循环选择项) {
//     做出选择;
//     backtrack(路径,选择, ...args);
//     撤销选择;
//   }
// }