// 如何遍历数组
// - for(let i = 0 ; i < length ; i++) {}  计数循环  性能好  可读性不好  不是人脑，电脑
// - while
// - forEach
// - map  filter find  some every ...
// - for of  
const names = Array.of('Alice' , 'Bob' , 'Charlie' , 'David')
// console.log(names)
// forEach 没有返回值，不能退出循环即使使用return也不行
names.forEach(name => {
    if(name === 'Charlie') {
        console.log(name)
        // break;
        return;
    }
})