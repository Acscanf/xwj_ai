/**
 * 懒加载函数：动态查询并加载进入可视区域的图片
 */
function lazyLoad() {
    console.log("触发懒加载..."); // 调试信息，表示函数被调用

    // 动态查询所有仍带有 data-src 属性的图片（确保每次处理的是未加载的图片）
    const imgs = document.querySelectorAll('img[data-src]');

    // 获取当前窗口的可视高度和滚动高度
    const windowHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollTop;

    // 遍历所有待加载的图片
    imgs.forEach(img => {
        const imgHeight = img.offsetHeight;      // 图片高度
        const imgTop = img.offsetTop;           // 图片顶部距离文档顶部的偏移量

        // 检查图片是否进入可视区域：
        // 1. 窗口底部（windowHeight + scrollHeight）是否超过图片顶部（imgTop）
        // 2. 图片底部（imgHeight + imgTop）是否超过窗口顶部（scrollHeight）
        if (windowHeight + scrollHeight > imgTop && imgHeight + imgTop > scrollHeight) {
            // 将 data-src 的值赋给 src，触发图片加载
            img.src = img.dataset.src;
            // 移除 data-src 属性，标记为已加载
            img.removeAttribute('data-src');
        }
    });
}

// 初始加载：立即检查首屏图片
lazyLoad();

// 监听滚动事件，触发懒加载
window.addEventListener('scroll', lazyLoad);


// /**
//  * 节流函数：在指定的时间间隔内只执行一次回调函数
//  * @param {Function} fn 需要节流执行的回调函数
//  * @param {number} delay 节流的时间间隔（毫秒）
//  * @param {...any} args 回调函数 fn 的固定参数（可选）
//  * @returns {Function} 返回一个节流后的函数
//  */
// function throttle(fn, delay, ...args) {
//     let timer = null; // 存储定时器ID
    
//     // 返回节流处理后的函数
//     return function(...params) {
//       // 合并固定参数和动态参数（如事件对象）
//       const allArgs = [...args, ...params];
//       // 保存当前执行上下文（this指向）
//       const context = this;
      
//       // 如果定时器不存在，表示可以执行新调用
//       if (!timer) {
//         // 设置定时器，延迟执行
//         timer = setTimeout(() => {
//           // 使用apply调用原函数，确保正确的this和参数
//           fn.apply(context, allArgs);
//           // 执行后重置定时器标识
//           timer = null;
//         }, delay);
//       }
//       // 如果定时器存在，忽略本次调用
//     };
//   }
  
//   // 使用示例：监听滚动事件，加载后面的图片
//   // throttle 返回一个节流处理后的函数
//   // lazyLoad: 实际要执行的图片加载函数
//   // 500: 节流时间间隔(ms)
//   // imgs: 固定参数(图片元素集合)
//   window.onscroll = throttle(lazyLoad, 500, imgs);