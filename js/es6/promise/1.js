// 读取1.html里面的内容
// 读取完后打印读完了
const fs = require('fs'); // 引入js内置的文件模块
const readFilePromise = new Promise((resolve , reject) => {
    fs.readFile('./1.html' , (err , data) => {
        console.log(data.toString()); // 把读取到的内容转成字符串
        resolve()
    })
})

readFilePromise.then(() => {
    console.log('111');
})