// 暴力求解回文字串
// 思路：列举所有的子串，并验证其是否为回文，更新最长回文子串

function isPalindrome (str) {
  const len = str.length;
  for (let i = 0; i < len; i++) {
    if (str[i] !== str[len - i - 1]) {
      return false;
    }
  }
  return true;
}

function maxStr (preStr) {
  let maxStr = '';
  let max = 0;
  for (let i = 0; i < preStr.length; i++) {
    for (let j = i + 1; j <= preStr.length; j++) {
      const testStr = preStr.slice(i, j);
      if (isPalindrome(testStr) && testStr.length > max) {
        maxStr = testStr;
        max = testStr.length;
        console.log('发现:', maxStr);
      }
    }
  }
  return maxStr;
}

maxStr('cbbd');

var longestPalindrome = function (s) {
  const n = s.length;
  let res = '';
  const dp = Array.from(new Array(n), () => new Array(n).fill(0));
  console.log(dp);
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1]);
      if (dp[i][j] && j - i + 1 > res.length) {
        res = s.substring(i, j + 1);
      }
    }
  }
  console.log(res);
  return res;
};

longestPalindrome('cbbd');
