// 不是JS 单线程
// Worker线程 复杂或耗性能的计算
// 这个能力来自于浏览器
// js 还是单线程，只不过在复杂计算时用worker线程
// 不可以使用document，this不是原来的this
// 线程间的通信，靠消息机制
// console.log(this)
// console.log(document.getElementById('worker'));
self.onmessage = function(e) {
    console.log(e.data);
    self.postMessage("hello from worker")
}