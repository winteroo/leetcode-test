/**
 * @desc 字母异位词分组
 * 保证键值得唯一性
 * 此方法采用字符串数组分割排序后的字符串为键值，保证了相同字母组合的字符串键值相同
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
  if (!strs || strs.length === 0) return [];

  const ans = new Map();

  for (let i = 0; i < strs.length; i++) {
    const tempStr = strs[i].split('').sort().join('');
    if (ans.has(tempStr)) {
      const tempArr = ans.get(tempStr);
      tempArr.push(strs[i]);
      ans.set(tempStr, tempArr);
    } else {
      ans.set(tempStr, [strs[i]]);
    }
  }
  return [...ans.values()];
};

// 输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

console.log(groupAnagrams(strs));
