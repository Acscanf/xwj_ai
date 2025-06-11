"use strict"; // 启用严格模式
var b = 10;
(function b() {
    b = 20; // 不生效，因为具名函数表达式的函数名在函数内部是只读的，修改操作不会改变其值
    console.log(b);
})()

console.log(b)