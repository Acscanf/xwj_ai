console.log("同步Start")
// 立即执行他是同步代码，但是他的then是微任务
const promise1 = Promise.resolve('First Promise');
const promise2 = Promise.resolve('Second Promise');
const promise3 = new Promise(resolve => {
    console.log('promise3')
    resolve('Third Promise');
})
setTimeout(() => {
    console.log('setTimeout-1')
    const promise4 = Promise.resolve('Fourth Promise');
    promise4.then(value => {console.log(value)})
}, 0)
setTimeout(() => {
    console.log('setTimeout-2')
}, 0)
promise1.then(value => {console.log(value)})
promise2.then(value => {console.log(value)})
promise3.then(value => {console.log(value)})

console.log("同步end")