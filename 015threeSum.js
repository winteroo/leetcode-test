/**
 * @description
 * 判断当前加入数组的元素是否与数组中的元素重复
 * @param {*} ans 查找的数组(有序)
 * @param {*} item  当前要插入数组的元素(有序)
 */
function removeDup(ans, item) {
  let itemStr = item.toString();
  for (let i = 0; i < ans.length; i++) {
    if (ans[i].toString() === itemStr) {
      return false;
    }
  }
  return true;
}
/**
 * @description
 * 暴力法
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let t = j + 1; t < nums.length; t++) {
        if (nums[i] + nums[j] + nums[t] === 0) {
          let res = [nums[i], nums[j], nums[t]].sort();
          if (removeDup(ans, res)) {
            // 注意这里全部是排序后的数组
            ans.push(res);
          }
        }
      }
    }
  }
  return ans;
};


let nums = [-1, 0, 1, 2, -1, -4]
console.time('执行时间0');
console.log(threeSum(nums));
console.timeEnd('执行时间0');

/**
 * @description
 * hash表法
 * 注意：把j和后续的数组看做两数之和的hash算法来做 
 * hash表结构：
 * -num[i]-nums[j]:[nums[i], nums[j]]
 * 每次判断map[num[j]]是否存在
 * 存在则去重后插入数组
 * 不存在则设置当前值
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSumElse = function (nums) {
  let ans = [];
  for (let i = 0; i < nums.length - 1; i++) {
    let map = {};
    for (let j = i + 1; j < nums.length; j++) {
      if (map[nums[j]]) {
        let res = [nums[j], ...map[nums[j]]].sort();
        if (removeDup(ans, res)) {
          ans.push(res);
        }
      } else {
        let key = -nums[j] - nums[i];
        map[key] = [nums[i], nums[j]]
      }
    }
  }
  return ans;
}

console.time('执行时间1');
console.log(threeSumElse(nums));
console.timeEnd('执行时间1');


/**
 * @description
 * 排序 + 双指针
 * 数组排序后，选取第一个值为固定点i，
 * left指向固定点的下一个值
 * (此时需要判断是否与下一个值重复，重复则跳过，执行下一次循环)
 * right指针指向最右侧的值
 * i,left, right处的值相加与0进行比较，
 * 相同，则向数组中push，注意这里存在重复，需要去重
 * 不相同，则判断相加值与0的大小关系
 * 大于0，说明右侧的值太大，右指针左移，即right--
 * 小于0，说明左侧的值太小，左指针右移，即left++
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSumOther = function (nums) {
  let sortNums = nums.sort((a, b) => a - b);
  if (sortNums[0] > 0) return [];
  let ans = [];
  for (let i = 0; i < sortNums.length - 2; i++) {
    let right = sortNums.length - 1;
    let left = i + 1;
    // 判断当前值和后续值是否相同，相同则说明重复，直接执行下一次循环
    if(i > 0 && sortNums[i] === sortNums[i-1]) continue; 
    while (left < right) {
      if (
        sortNums[i] + sortNums[left] + sortNums[right] === 0
        ) {
        let res = [sortNums[i], sortNums[left], sortNums[right]];
        ans.push(res);
        // 如果左指针与其下一个指针值相同，说明存在重复，跳过
        while (
          left < right && 
          sortNums[left + 1] === sortNums[left]
          ) {
          left++;
        }
        while (
          left < right && 
          sortNums[right - 1] === sortNums[right]
          ) {
          right--;
        }
        // 执行到这里，左右指针都指向了最后一个与left值相同的位置，
        // 此时我们还需要将左右指针再次向前进位，跳过最后一个重复值
        // [1,1,1,1,2,3,4,5,6]
        // 此时left指针在最后一个1处，还是与最开头的1重复，所以再次
        // 加1,指针指向不重复的值
        left++;
        right--;
      } else {
        sortNums[i] + 
        sortNums[left] + 
        sortNums[right] 
        > 0 ? right-- : left++;
      }
    }
  }
  return ans;
}

console.time('执行时间2');
console.log(threeSumOther(nums));
console.timeEnd('执行时间2');