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

- props  组件通信
    - 传递的状态(参数)
    - 传递自定义事件
    - 直接解构  或者
        const {
            todos,  // 任务
            onAddTodo  // 添加任务
        } = props 单独解构

- 数据绑定
    - 变量 修改值
    - 数据状态
        - Data binding **数据**绑定  jsx 就是静态的
            {} 数据绑定
        - 数据和界面状态的统一
            - 界面由数据驱动的
            - 数据和界面状态的一致性
        - 响应式的

- Vue 和 React 区别
    - vue 好入门，api文档好用
    - react 倾向于原生JS 入门难
        - hooks ？
    - Vue  双向绑定
        <input v-model="text" />
    - React  单向绑定
        <input value={text} onChange={(e) => setText(text)} />