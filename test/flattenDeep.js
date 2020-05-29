/**
 * 拉平数组
 * @param {Array} val 需要拉平的数组 
 * @param {Number} dep 需要拉平的层级
 */
function flattenDeep(val, dep) {
  let type = Object.prototype.toString.call(val).slice(8, -1);
  if (type !== 'Array') return val;
  let res = [];
  let deepth = parseInt(dep) > 0 ? dep : Infinity;
  baseFlatten(val, deepth);
  return res;

  function baseFlatten(arr, deepth) {
    if (Array.isArray(arr)) {
      if (deepth > 0) {
        for (let item of arr) {
          baseFlatten(item, deepth - 1);
        }
      } else {
        res.push(arr);
      }
    } else {
      res.push(arr);
    }
  }
}

let arr = [1, [2, [3, [4, [6, 8]]], 5]];
console.log(flattenDeep(arr, -5));
console.log(flattenDeep(arr));
console.log(arr.toString().split(','))
console.log(arr.join().split(','))
console.log(arr.flat(Infinity));





var arr = [1, 2, 3];
async function a(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num);
    }, 1000);
  })
}

async function test() {
  arr.forEach(async x => {
    const res = await a(x);
    console.log(res);
  })
}