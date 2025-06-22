function objectFactory() {
    var obj = {};
    var Constructor = [].shift.call(arguments);
    obj.__proto__ = Constructor.prototype;
    var ret = Constructor.apply(obj, arguments);
    return typeof ret == 'object' ? ret || obj : obj;
}

function Person(name , age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHi = function() {
    console.log(`你好，我是${this.name}`);
}

let p = objectFactory(Person, '张三', 18);
console.log(p);
p.sayHi();


