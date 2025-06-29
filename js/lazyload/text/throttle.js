/**
 * 节流函数：在指定的时间间隔内只执行一次回调函数
 * @param {Function} fn 需要节流执行的回调函数
 * @param {number} delay 节流的时间间隔（毫秒）
 * @param {...any} args 回调函数 fn 的固定参数（可选）
 * @returns {Function} 返回一个节流后的函数
 */
function throttle(fn, delay, ...args) {
    let timer = null; // 存储定时器ID

    // 返回节流处理后的函数
    return function (...params) {
        // 合并固定参数和动态参数（如事件对象）
        const allArgs = [...args, ...params];
        // 保存当前执行上下文（this指向）
        const context = this;

        // 如果定时器不存在，表示可以执行新调用
        if (!timer) {
            // 设置定时器，延迟执行
            timer = setTimeout(() => {
                // 使用apply调用原函数，确保正确的this和参数
                fn.apply(context, allArgs);
                // 执行后重置定时器标识
                timer = null;
            }, delay);
        }
        // 如果定时器存在，忽略本次调用
    };
}

// 使用示例：监听滚动事件，加载后面的图片
// throttle 返回一个节流处理后的函数
// lazyLoad: 实际要执行的图片加载函数
// 500: 节流时间间隔(ms)
// imgs: 固定参数(图片元素集合)
// window.onscroll = throttle(lazyLoad, 500, imgs);

export default throttle;