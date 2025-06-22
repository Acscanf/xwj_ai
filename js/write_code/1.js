// 完成的功能
// function objectFactory() {
//     var obj = {};
//     //  类数组上没有shift方法，所以需要借用数组的shift方法
//     var Constructor = [].shift.call(arguments); // 构造函数
//     obj.__proto__ = Constructor.prototype;
//     var ret = Constructor.apply(obj , arguments)
//     // || null 的情况，仍然会返回object 如果构造函数 return 简单类型，忽略
//     return typeof ret === 'object' ? ret || obj : obj;
// }

// 优化 es6 版本
function objectFactory(Constructor, ...args) {
    var obj = {};
    //  类数组上没有shift方法，所以需要借用数组的shift方法
    // var Constructor = [].shift.call(arguments); // 构造函数
    obj.__proto__ = Constructor.prototype;
    var ret = Constructor.apply(obj , args)
    // || null 的情况，仍然会返回object 如果构造函数 return 简单类型，忽略
    return typeof ret === 'object' ? ret || obj : obj;
}

function Person(name, age) {
    this.name = name;
    this.age = age; // 修正拼写错误
    // 如果需要返回新对象，请考虑是否真的需要这样做
    // return {
    //     name: name,
    //     age: age,
    //     label: '哈哈'
    // }
}

Person.prototype.sayHi = function() {
    console.log(`你好，我是${this.name}`)
}

let p1 = new Person('张三' , 18)
console.log(p1)
// p.sayHi()

let p = objectFactory(Person, '张三' , 18)
console.log(p)
p.sayHi()
console.log(p instanceof Person)
// mew Person(...) -> function [[construct]] -> {} && this -> {} -> [[call]] 
// -> {}.__proto__ -> Constructor.prototype -> return {}