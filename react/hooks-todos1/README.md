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

- 本地存储
    - localStorage  本地存储
        key: value 存储
        setItem(key, value)  // 存储
        getItem(key)  // 获取
        removeItem(key)  // 删除
        clear()  // 清除所有
    
    - BOM Browser Object Model 浏览器对象模型
    - DOM Document Object Model 文档对象模型
- 本地存储
    - localStorage 和 cookie 有什么异同
    - http 无状态，head cookie 带上
    - cookie 太大，影响http 性能 4kb
    - cookie 前端，后端都可以设置
        过期时间
        domain 域名
        path 路径
        secure 安全协议 https
        httpOnly 只能在http协议中访问，不能在js中访问
    - localStorage 只在浏览器端，前端设置，后端无法设置 
        domain 域名
        5MB
    - IndexDB 数据库 GB

## 自定义hooks
    - 自己定义的
    - use
    - 某一项功能
        简单函数的封装
        响应式的状态
        effect
        todos

- 自定义hooks 
    - 现代react app 的架构一部分
    - hooks 目录
        自定义hooks
        框架 common 部分
        业务定制 hooks
    - use开头
        state, effect 逻辑封装复用
    - return
        todos
        toggle
        addTodos
        deleteTodos
        函数式编程思想的体现
    - 组件更好的聚焦于模板渲染
    - 全面hooks函数式编程

- 两个遗憾
    - ../../  路径太复杂
        vite 配置alias 短路径
    - toggle、delete 跨越组件层级有点多
        