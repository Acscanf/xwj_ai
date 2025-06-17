// 如何用闭包优化fib
// 记忆功能
function memoizedFib() {
    // 闭包  1. 函数嵌套函数  2. 函数内部可以访问外部的变量  3. 函数作为返回值
    // 自由变量
    const cache = {};  // 存储
    return function fib(n) {
        if(n <= 1) return n;
        if(cache[n]) return cache[n];  // 缓存
        cache[n] = fib(n - 1) + fib(n - 2);  // 缓存
        return cache[n];  // 缓存
    }
}

// 可以在外部访问
const fib = memoizedFib();
console.log(fib(1000))