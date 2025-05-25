/**
 * @func 反转字符串
 * @param {string} str 
 * @return string
 */

// es5 函数表达式
function reverseString(str) {
    //str 是什么类型？ 字符串 简单数据类型 primitive
    return str.split('').reverse().join('');
}

//ES6 箭头函数 简洁 function 不要了 用箭头函数代替
// {} 也省略 只有一句话的时候
// 他是返回值的时候 连return 都可以省略
const reverseString2 = (str) => str.split('').reverse().join('');
console.log(reverseString2('hello'));