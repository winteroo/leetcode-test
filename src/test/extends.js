function Animal (name) {
  this.name = name || 'animal';
  this.features = ['sleep', 'eat'];

  this.sleep = function () {
    console.log('sleep');
  };
}

Animal.prototype.eat = function (food) {
  console.log(this.name + ' eat: ' + food);
};

/** * 原型链继承 ***/

// function Cat() {

//   this.miao = function () {
//     console.log('miao~');
//   }

// }

// Cat.prototype = new Animal('cat');

/** * 构造继承 ***/

// function Cat(name) {

//   Animal.call(this, name);

//   this.miao = function () {
//     console.log('miao~');
//   }
// }

/** * 实例继承 ***/

// function Cat(name) {
//   let instance = new Animal(name);
//   instance.miao = function () {
//     console.log('miao~');
//   }
//   return instance
// }

/** * 拷贝继承 ***/
// function Cat(name) {
//   let animal = new Animal(name);
//   for (let key in animal) {
//     Cat.prototype[key] = animal[key];
//   }
//   Cat.prototype.miao = function () {
//     console.log('miao~');
//   }
// }

/** * 组合继承 ***/
// function Cat(name) {
//   Animal.call(this, name);
//   this.miao = function () {
//     console.log('miao~');
//   }
// }
// Cat.prototype = new Animal();

/** * 寄生组合继承 ***/
function Cat (name) {
  Animal.call(this, name);
  this.miao = function () {
    console.log('miao~');
  };
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

// (function () {
//   function supers () {}
//   supers.prototype = Animal.prototype;
//   Cat.prototype = new supers();
//   Cat.prototype.constructor = Cat;
// })()

/** 测试 ***/
const tom = new Cat('tom');
const cat = new Cat('cat');

console.log(cat.name);
cat.sleep();
cat.eat('fish');
cat.miao();
cat.features.push('miao');
cat.name = 'catcat';

console.log(cat.features, cat.name);

console.log(tom.features, tom.name);

console.log(cat instanceof Animal);

console.log(cat instanceof Cat);
