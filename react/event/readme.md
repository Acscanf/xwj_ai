# react 事件机制
- js 事件机制
    - 异步
    - 监听一个事件
        - addEventListener() 
            标准的DOM2级事件机制
        - DOM0
            <a onclick="doSomething()"></a>
        - DOM1 ? DOM 版本 ， 没有DOM1 版本 没有去做事件升级

    - addEventListener(type , listener , options)
        - 回调函数 callback 异步处理的称呼
        - promise then
        - async await
        监听器

- 注册事件 addEventListener(type, listener, options)
    - 事件类型 type 字符串 事件名
    - 监听器 listener 回调函数 事件处理函数
    - 事件对象 event 事件对象 事件源对象 触发事件的元素
        - 事件对象 是一个对象 包含了事件的相关信息
        - 事件对象 是一个对象 包含了事件的相关信息
- useCapture false 默认值
    先捕获  从最外层的document -> 一层层的往下
        点了谁？
        先触发父元素
    event.target 事件源对象 触发事件的元素 
        捕获阶段结束，拿到event.target 
    冒泡
        event.target 冒泡到html 回到根
        事件让他在冒泡阶段执行

## 事件委托优势(delegation)
    - 性能优化
        - 极致将事件委托给最外层元素(要有唯一标识元素  可以自定义为data-item等等)
        react 大型项目开发
        给我们的事件节点event，target  添加一个唯一属性
    - 动态节点的事件
        滚动到底部，一次新增一堆的新元素
        事件委托可以有效解决这个问题
    - 同一元素同一事件注册多次
        - dom节点
        - event type  (事件类型)
        - 监听器(回调函数)  event loop
            event 对象
        - useCapture
        - event.preventDefault() 阻止默认行为 
            form submit  自动跳转
            a
        - event.stopPropagation() 阻止冒泡
    - 用户交互的便利体验问题
        - toggle 按钮
        - 点击页面任何地方都可以关闭 很方便，提高了用户体验   stopPropagation()
        - 显示区可以交互，不关闭stopPropagation()

- SyntheticEvent 合成事件
    - 委托 #root
        性能优化框架帮我们做
    - 事件池 Event pooling
        事件对象的回收利用
        当你是一个大型密集交互的应用
    - 最近的版本又可以安全使用了