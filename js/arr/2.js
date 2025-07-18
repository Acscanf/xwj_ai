// fill 一样
// Array,静态方法
console.log(Array.of(1 , 2 , 3)) // 不同值的初始化
// 发咋的计算或转变
console.log(Array.from(new Array(26) , (val , index) => {
    return String.fromCodePoint(65 + index)
}))