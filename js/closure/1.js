// add 函数 ， 3个参数
// add.length 3 
function add(a , b , c) {
    return a + b + c;
}

add(1, 2, 3); 

function curry(fn) {
    // 递归
    // 返回一个函数
    // ...args 所有的参数 自由变量
    let judge = (...arg) => {
        if(arg.length === fn.length) return fn(...arg)
        return (...newArgs) => judge(...arg, ...newArgs)
    }
    return judge
}
// 柯里化 手写curry 函数
let addCurry = curry(add);
// 逐步的去获取函数需要的参数。当到达fn 需要的参数数量时，执行结果
console.log(addCurry(1)(2)(3)); // 6