/**
 * @func 两数之和
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */

// 函数编写者
// 函数调用
// 健壮性
// typeof 运算符 数据的类型
// 判断简单数据的类型 ， 除了null
// 返回值是类型的字符串
function add(a , b) {
    // 参数效验
    if(typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        throw new TypeError('参数必须是number类型');
    }
    return a + b;
}