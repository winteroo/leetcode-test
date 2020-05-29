function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.walk = function () {
  console.log(this.name + '，' + this.age + '岁，会走路！');
}
// let tom = new Person('tom', 19);
// tom.walk();


function myNew (sup, ...args) {
  let obj = {};

  sup.call(obj, ...args);

  obj.__proto__ = sup.prototype;

  return obj;
}

let tom2 = myNew(Person, 'tom', 19);
console.log(tom2.name);
console.log(tom2.age);
tom2.walk();
