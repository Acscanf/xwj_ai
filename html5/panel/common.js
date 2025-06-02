const panels = document.querySelectorAll('.qq-panel');
panels.forEach(panel => {
    // JS 是事件机制的语言
    panel.addEventListener('click', () => {
        // 移除所有的 active 类
        removeActiveClasses(); // 模块化
        panel.classList.toggle('qq-panel_active');
    });
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('qq-panel_active');
    })
}