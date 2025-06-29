// 获取所有带有 data-src 属性的图片元素（初始页面中的图片）
const imgs = document.querySelectorAll('img[data-src]');

function lazyLoad() {
    console.log("触发懒加载..."); // 调试信息，表示函数被调用
    const windowHeight = window.innerHeight; // 获取当前窗口可视区域的高度

    // 使用 Array.prototype.forEach.call 遍历类数组对象(imgs)
    Array.prototype.forEach.call(imgs, img => {
        // 跳过 data-src 为空的图片
        if (img.dataset.src === '') return;

        // 获取图片相对于视口的位置信息
        const rect = img.getBoundingClientRect();

        /**
         * 检测图片是否进入视口：
         * 1. rect.bottom >= 0: 图片底部在视口顶部下方（或刚好接触顶部）
         * 2. rect.top < windowHeight: 图片顶部在视口底部上方
         * 同时满足表示图片至少有一部分在可视区域内
         */
        if (img.dataset.src && rect.bottom >= 0 && rect.top < windowHeight) {
            // 将 data-src 的值赋给 src 属性，触发图片加载
            img.src = img.dataset.src;
            // 移除 data-src 属性避免重复加载
            img.removeAttribute('data-src');
        }
    });
}

// 页面加载时立即执行一次懒加载
lazyLoad();

/**
 * 节流函数：在指定的时间间隔内只执行一次回调函数
 * @param {Function} fn 需要节流执行的回调函数
 * @param {number} delay 节流的时间间隔（毫秒）
 * @param {...any} args 回调函数 fn 的固定参数（可选）
 * @returns {Function} 返回一个节流后的函数
 */
function throttle(fn, delay, ...args) {
    let timer = null; // 存储定时器ID，用于控制执行频率

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

// 使用节流函数包装懒加载功能：
// 1. 指定要执行的函数：lazyLoad
// 2. 设置节流间隔：500ms
// 3. 传入固定参数：imgs（初始图片集合）
window.onscroll = throttle(lazyLoad, 500, imgs);