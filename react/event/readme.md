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