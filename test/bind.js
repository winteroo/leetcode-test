// var a = 10;

// function Test() {
//   console.log(this.a);
// }

// Test();

// let obj = {
//   a: 20
// }

// var TestBind = Test.bind(obj);
// TestBind();

// let newTest = new TestBind();

// newTest.a;


// Function.prototype.bind = function () {
//   // 数组方法
//   let slice = Array.prototype.slice;
  
//   let fn = this;

//   let args = arguments;
//   // 绑定的作用域
//   let context = args[0];
//   // 剩余参数
//   let restArgs = slice.call(args, 1);

//   let fun = function () {
//     // 组合bing参数
//     let allArgs = restArgs.concat(slice.call(arguments));
//     // 返回原函数在context作用域下的执行结果
//     return fn.apply(context, allArgs);
//   }

//   return fun;
// }

Function.prototype.bind = function () {

  let slice = Array.prototype.slice;

  let fn = this;

  let args = arguments;

  let context = args[0];

  let restArgs = slice.call(args, 1);

  let fun = function () {

    let allArgs = restArgs.concat(slice.call(arguments));

    return fn.apply(this instanceof fun ? this : context, allArgs);
  }

  fun.prototype = Object.create(this.prototype);

  return fun;
}

function myTest () {
  console.log(this.a);
}
myTest.prototype.walk = function () {
  console.log('walk');
}

let obj = {
  a: 30
}
let c = myTest.bind(obj);

c();

let cc = new c();
cc.walk();

let d = new myTest();
d.walk();








// 'use strict';

// /* eslint no-invalid-this: 1 */

// var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
// var slice = Array.prototype.slice;
// var toStr = Object.prototype.toString;
// var funcType = '[object Function]';

// module.exports = function bind(that) {
//     var target = this;
//     if (typeof target !== 'function' || toStr.call(target) !== funcType) {
//         throw new TypeError(ERROR_MESSAGE + target);
//     }
//     var args = slice.call(arguments, 1);

//     var bound;
//     var binder = function () {
//         if (this instanceof bound) {
//             var result = target.apply(
//                 this,
//                 args.concat(slice.call(arguments))
//             );
//             if (Object(result) === result) {
//                 return result;
//             }
//             return this;
//         } else {
//             return target.apply(
//                 that,
//                 args.concat(slice.call(arguments))
//             );
//         }
//     };

//     var boundLength = Math.max(0, target.length - args.length);
//     var boundArgs = [];
//     for (var i = 0; i < boundLength; i++) {
//         boundArgs.push('$' + i);
//     }

//     bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

//     if (target.prototype) {
//         var Empty = function Empty() {};
//         Empty.prototype = target.prototype;
//         bound.prototype = new Empty();
//         Empty.prototype = null;
//     }

//     return bound;
// };

