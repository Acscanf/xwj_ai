/**
 * 添加 IntersectionObserver 观察器，实现图片懒加载功能
 */
function addObserver() {
    // 获取所有带有 data-src 属性的 img 元素（待懒加载的图片）
    const imgs = document.querySelectorAll('img[data-src]');
    
    /**
     * 创建 IntersectionObserver 实例
     * @param {IntersectionObserverEntry[]} entries - 被观察元素的交叉状态数组
     */
    const observer = new IntersectionObserver(entries => {
        // 遍历所有发生交叉状态变化的元素
        entries.forEach(entry => {
            // 判断元素是否进入视口（isIntersecting 为 true 表示进入视口）
            if (entry.isIntersecting) {
                // 获取当前进入视口的图片元素
                const img = entry.target;
                
                // 将 data-src 的值赋给 src 属性，触发图片加载
                img.src = img.dataset.src;
                
                // 移除 data-src 属性（可选，防止重复加载）
                img.removeAttribute('data-src');
                
                // 图片已加载，停止观察该元素以优化性能
                observer.unobserve(img);
            }
        });
    }, {
        // 可选的配置项（这里使用默认配置）：
        // root: null,          // 默认为视口
        // rootMargin: '0px',   // 观察范围不扩展
        // threshold: 0         // 元素刚进入视口就触发
    });
    
    // 遍历所有待观察的图片元素，开始观察每个元素
    imgs.forEach(img => {
        observer.observe(img);
    });
}

// 执行函数，启动图片懒加载观察
addObserver();