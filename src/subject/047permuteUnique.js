/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const result = [];
  const temp = [];
  // 将数组排序同时将数组处理成包含是否访问标志的对象
  nums.sort((a, b) => a - b);
  const cloneNums = nums.map((item, i) => {
    return {
      val: item,
      visited: false
    };
  });
  backtrack(result, temp, cloneNums);
  return result;
};

function backtrack (result, temp, nums) {
  if (temp.length === nums.length) {
    const list = [];
    temp.forEach(el => {
      list.push(el.val);
    });
    result.push([...list]);
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    // 当前元素已经被访问
    if (nums[i].visited) continue;
    // 当前访问的元素和上一个元素相同，且上一个元素已经被访问，结果会相同，直接跳过整个循环
    if (i > 0 && nums[i].val === nums[i - 1].val && nums[i - 1].visited) break;
    temp.push(nums[i]);
    nums[i].visited = true;
    backtrack(result, temp, nums);
    temp.pop();
    nums[i].visited = false;
  }
}

const nums = [1, 1, 3, 1, 1];

console.log(permuteUnique(nums));

// var swap = function(nums, i, j) {
//   if (i === j)
//       return;
//   const t = nums[i];
//   nums[i] = nums[j];
//   nums[j] = t;
// };

// var cal = function (nums, first, result) {
//   if (nums.length === first) {
//       result.push([...nums]);
//       return;
//   }

//   const map = new Map();
//   for (let i = first; i < nums.length; i++) {
//       if (!map.get(nums[i])) {
//           map.set(nums[i], true);
//           swap(nums, first, i);
//           cal(nums, first + 1, result);
//           swap(nums, first, i);
//       }
//   }
// };

// /**
// * @param {number[]} nums
// * @return {number[][]}
// */
// var permuteUnique = function(nums) {
//   if (nums == null)
//       return;

//   nums.sort((a, b) => a - b);
//   const res = [];
//   cal(nums, 0, res);
//   return res;
// };

// let nums = [1,1,3];

// console.log(permuteUnique(nums))
