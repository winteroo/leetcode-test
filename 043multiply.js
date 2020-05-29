/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';
  let num1Arr = num1.split('');
  let num2Arr = num2.split('');
  let result = [];
  for (let i = num2Arr.length - 1; i >= 0; i--) {
    let carry = 0;
    let remainder = 0;
    let temp = 0;
    let nums = [];
    if (i < num2Arr.length - 1) {
      for (let k = 0; k < (num2Arr.length - 1 - i); k++) {
        nums.push(0);
      }
    }
    for (let j = num1Arr.length - 1; j >= -1; j--) {
      if (j === -1) {
        carry = Math.floor(Number(num2Arr[i]) * Number(num1Arr[j + 1]) / 10);
        if (carry > 0) {
          nums.push(carry);
        }
      } else {
        // 余数
        remainder = Number(num2Arr[i]) * Number(num1Arr[j]) % 10;
        if (j !== num1Arr.length - 1) {
          // 上一级的进位
          carry = Math.floor(Number(num2Arr[i]) * Number(num1Arr[j + 1]) / 10) + temp;
          if (carry + remainder >= 10) {
            temp = 1;
            remainder = (carry + remainder) % 10;
          } else {
            temp = 0;
            remainder = carry + remainder;
          }
        }
        nums.push(remainder);
      }
    }
    // console.log(nums.reverse());
    if (result.length === 0) {
      result = nums.reverse();
    } else {
      result = add(result, nums.reverse());
    }
  }
  return result.join('')
};

let num1 = "123456789"
let num2 = "9"
console.log(multiply(num1, num2)) 

function add(num1, num2) {
  console.log(num1, num2);
  let l1 = num1.length - 1;
  let l2 = num2.length - 1;
  let nums = [];
  let maxArr = [];
  let minArr = [];
  if (l1 >= l2) {
    maxArr = num1;
    for (let i = 0; i < l1 - l2; i++) {
      num2.unshift(0);
    }
    minArr = num2;
  } else {
    maxArr = num2;
    for (let i = 0; i < l2 - l1; i++) {
      num1.unshift(0);
    }
    minArr = num1;
  }
  let maxlen = maxArr.length - 1;
  while (maxlen >= -1) {
    let carry = 0;
    let remainder = 0;
    if (maxlen === -1) {
      remainder = maxArr[maxlen + 1] + minArr[maxlen + 1] >= 10 ? 1 : 0;
      if (remainder > 0) {
        nums.push(1);
      }
    } else {
      if (maxlen === maxArr.length - 1) {
        remainder = (maxArr[maxlen] + minArr[maxlen]) % 10;
      } else {
        carry = maxArr[maxlen + 1] + minArr[maxlen + 1] >= 10 ? 1 : 0;
        remainder = (maxArr[maxlen] + minArr[maxlen]) % 10 + carry;
      }
      if (remainder === 10) {
        nums.push(0);
        nums.push(1);
      } else {
        nums.push(remainder)
      }
    }
    maxlen--;
  }
  return nums.reverse();
}

console.log(add([9,9],[9]));