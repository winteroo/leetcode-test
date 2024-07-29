/**
 * @description 阶乘
 * @param {Number} n 
 */
const factorial = function (n) {
  if (n === 1 || n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
// console.log(factorial(5));

/**
 * @description 斐波那契数列
 * @param {Number} n
 */
const fibonacci = (n) => {
  if (n < 1) return 0;
  if (n < 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * @description: 通过缓存部分数据达到优化递归的目的
 * @param {Number} n 
 */
const fibonacciMemoization = (n) => {
  let memo = [0, 1];
  const fibonacci = (n) => {
    if (memo[n] != null) return memo[n];
    memo[n] = fibonacci(n - 1) + fibonacci(n - 2)
    return memo[n]
  }
  return fibonacci(n);
}

// 832040  
// 0: 34.759033203125ms
console.time(0)
console.log(fibonacci(30));
console.timeEnd(0)

// 832040
// 1: 0.3408203125ms
console.time(1)
console.log(fibonacciMemoization(30));
console.timeEnd(1)

// 可以发现速度的提升是非常明显的




let tran = {
  a: '我是a',
  b: '我是b',
  c: '我是c',
  d: '我是d',
  dd: '我是dd',
  ii: '我是ii',
  oo: '我是oo',
  ff: '我是ff'
}
// 遍历解析Json
/**
 * @description 遍历解析Json
 * @param {Object} jsonObj:需要解析的json数据
 * @param {Object} translate:key值对应的翻译map
 */
function parseJson(jsonObj, translate) {
  // 循环所有键
  for (let key in jsonObj) {
    //如果对象类型为object类型且数组长度大于0 或者 是对象 ，继续递归解析
    let element = jsonObj[key];
    for (let k in translate) {
      if (k === key) {
        jsonObj[translate[k]] = element;
        delete jsonObj[key];
      }
    }
    if (element.length > 0 && typeof (element) == "object" || typeof (element) == "object") {
      parseJson(element, translate);
    }
  }
  return jsonObj;
}

/**
 * @description 深拷贝
 * @param {any} source 
 */
function extend(source) {
  let target = null;
  if (typeof source === 'object') {
    target = Array.isArray(source) ? [] : {}
    for (let key in source) {
      if (source.hasOwnProperty(key)) {
        if (typeof source[key] !== 'object') {
          target[key] = source[key]
        } else {
          target[key] = extend(source[key])
        }
      }
    }
  } else {
    target = source
  }
  return target
}

/**
 * @description 遍历解析Json,不会改变原json数据
 * @param {Object} jsonObj:需要解析的json数据
 * @param {Object} translate:key值对应的翻译map
 */
function cloneAndParseJson(json, translate) {
  let cloneJson = JSON.parse(JSON.stringify(json));
  function parseJson(jsonObj, translate) {
    for (let key in jsonObj) {
      let element = jsonObj[key];
      for (let k in translate) {
        if (k === key) {
          jsonObj[translate[k]] = element;
          delete jsonObj[key];
        }
      }
      if (element.length > 0 && typeof (element) == "object" || typeof (element) == "object") {
        parseJson(element, translate);
      }
    }
    return jsonObj;
  }
  return parseJson(cloneJson, translate);
}

let json = {
  a: 1,
  b: [{
    c: 12,
    b: 34
  }],
  d: {
    dd: [{
      ii: {
        oo: 1,
        ff: 09
      }
    }]
  }
}

// let jsonclone = extend(json);
// console.log(parseJson(jsonclone, tran))
// console.log(json);
console.log(cloneAndParseJson(json, tran));
console.log(json);