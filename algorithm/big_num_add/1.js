/**
 * 
 * @param {string} num1 
 * @param {string} num2 
 * @returns 
 */

function addLargeNumbers(num1, num2) {
    let result = ''; // 存储结果的字符串
    let carry = 0; // 存储进位
    let i = num1.length - 1; // 从最低位开始
    let j = num2.length - 1; // 从最低位开始
    while(i >= 0 || j >= 0 || carry > 0) { // 只要还有位没有处理或者还有进位
        // 边界
        const digit1 = i >= 0 ? parseInt(num1[i]) : 0; // 获取当前位的数字，如果没有则为0
        const digit2 = j >= 0 ? parseInt(num2[j]) : 0; // 获取当前位的数字，如果没有则为0
        const sum = digit1 + digit2 + carry; // 计算当前位的和
        result = (sum % 10) + result; // 将当前位的和加入结果字符串
        carry = Math.floor(sum / 10); // 计算进位
        i--; // 移动到下一位
        j--; // 移动到下一位
    }
    return result; // 返回结果字符串
}