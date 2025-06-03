// 独一无二的值
const sym = Symbol();
const sym1 = Symbol();
const sym2 = Symbol('desc'); // label 标签
console.log(typeof sym , sym);
console.log(sym === sym1); // false
// symbol 可以用于对象的key
// 使用Symbol 构造函数实例化，一个标记为id 的唯一值ID
// ID 唯一性， Symbol
const ID = Symbol('id');
// es6之前 key 只能是字符串
// symbol 作为key 是唯一的， 不会被覆盖
const sex = 'sex'
const num = 1;
const age = Symbol('age');
const user = {
    "name": 'Alice',
    [age]: 18,
    // [sex]: '男',
    // [num]: 123,
    // key 是独一无二的
    // 当我们在大厂，如果我们要去修改别人代码中的对象
    [ID]: 123,
    [Symbol()]: 3,
}
user.age = 19;

// console.log(user.name , user[ID] , user.age, user[age]);
// 面向对象私有属性概念?
// 对象的隐私，内部需要，不希望外界调用
for(let key in user) { // 遍历对象的key
    console.log(key, user[key],'----------'); 
}