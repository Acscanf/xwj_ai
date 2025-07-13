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

## 多进程和多线程
- CPU  轮询
- 进程
分配资源的最小单元
    内存 (地址，物理) CPU计算的机会
    独立的进程ID 一定的大小，开销
    程序运行以进程为单位
    - 主进程
        管理子进程 父子关系  并行
        进程间的通信
    - 主线程
        执行js代码
- 线程 
    干活的
- 进程间的通信
    两个独立进程间的通信开销很大
    父子进程就好点

- 浏览器是多进程架构
    - 浏览器主进程
    - 一个tab 就是一个渲染进程
        几个tab 几个进程
        安全，一个页面crash了，别的不受影响
    - 主线程 主角
        js单线程
        - 简单
        - DOM 编程模型 线程的争抢不可以  安全