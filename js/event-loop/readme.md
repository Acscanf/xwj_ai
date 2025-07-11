# event loop
事件循环机制  js 执行机制

- js 单线程
    同一时刻只做一件事
    同步任务，尽快执行完成
    同步任务尽快执行完，渲染页面(重绘重排)， 响应用户的交互(优先)
    耗时性的任务？？
        - setTimeout/setInterval
        - fetch/ajax
        - eventListener
- script 脚本
    一个宏任务

- 微任务有哪些？
    紧急的，优先的，同步任务执行完后的一个补充
    - promise.then
    - MutationObserver
        dom 改变在页面渲染前 拿到 DOM 有啥改变
    - Object.observe
    - process.nextTick
    - queueMicrotask


