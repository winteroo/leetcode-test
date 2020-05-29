/**
 * 生成 0-1 的随机数
 */
const rand01 = (function () {
  let today = new Date();
  let seed = today.getTime();

  return function rand() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / (233280.0);
  };
})();

/**
 * 生成[min, max]之间的随机数
 */
const randMinAndMax = (function () {
  let today = new Date();
  let seed = today.getTime();

  return function rand (min, max) {
    seed = (seed * 9301 + 49297) % 233280;
    let ans = Math.ceil( seed / (233280.0) * (max - min) + min);
    ans = ans ? ans : 0;
    return ans;
  };
})();


console.log(randMinAndMax(-10,10))
console.log(randMinAndMax(-10,10))
console.log(randMinAndMax(-10,10))
console.log(randMinAndMax(-10,10))
