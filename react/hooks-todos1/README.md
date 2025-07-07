## hooks todos

- 安排个 css 亮点
    - stylus 
        css 超集
    - 拥有vite脚手架
        stylus 预编译 安装 stylus 直接编译
        vite 来自 vue 社区
    - react 组件设计
        - 开发任务单元
        - 设计组件
            功能 界面 状态 响应式
            - 新建todo 表单
            - 修改  列表
            - 删除
        - 按功能划分 粒度
            - form 
            - list 列表
                - Item 组件  (有利于维护和**性能**)

- 字体 
    - 设置多个，设备的支持(本地包含)
    - 苹果设备 -apple-system  前端负责用户体验，字体也是体验的一部分

- rem
    - 相对html单位
    - 移动端的重要单位
    - 在移动端不要用px单位，px是绝对的
        移动端 宽高不定的 rem (html font-size)  vw/wh(viewport) em 相对单位
        使用相对单位，可以在所有设备上适配
        em 相对父元素