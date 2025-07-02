// es6 模块化
// mjs 后缀的文件 可以使用 import 语法 
// 模块化是语言的能力
// node 默认不支持es6 模块化 ， 所以要后缀名 mjs 才能使用 es6 模块化
// 可以在package.json 中配置 type: module 来支持es6 模块化
// node 最新版本支持了 22 版本以上支持了
// node 准备跟require commonjs say goodbye
// es6 module 更先进 mjs 后缀可以使用
import http from 'http';

// 创建服务器 
const server = http.createServer((req , res) => {
    // res.end 响应内容
    res.end('hello http server');
})

// listen 监听端口号
server.listen(1314);