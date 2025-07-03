// node 后端
// node 内置的核心模块 不需要下载 直接引入即可使用
// js 在命令行运行
// js 有两种模块化方案
// 1. require node 早起模块化方案commonJS
// 2. import es6 更先进的模块化方案
// old module 
// node 受欢迎 中小项目开发
// 端口 -> 某个服务
// 3306 mysql 数据库服务 进程 (资源) 线程 (执行)
// domain(localhost) -> ip 地址(127.0.0.1)
// -> 某台设备 -> port 设备上的某个服务(进程)
// 1234 8080 端口占用了
// 一台设备商可以很多端口使用，有多个http服务 多个网站
// 不要使用一些特殊端口
const http = require('http') // 引入http模块
const fs = require('fs') // 引入fs模块
const path = require('path') // 路径模块

// 创建服务器 
const server = http.createServer((req , res) => {
    // res.end 响应内容
    // res.end('hello http server');
    // http 基于请求响应的协议
    // 路由 Method + url 定位了服务器端的资源
    // 为了资源 
    if(req.method == 'GET' && req.url == '/') {
        console.log(__dirname , path.join(__dirname, 'public', 'index.html'));
        fs.readFile(
            path.join(__dirname, 'public' , 'index.html'), 
            // callback 回调函数 异步操作
            // 回调函数有两个参数 第一个参数是错误信息 第二个参数是文件内容
            (err, content) => {
                // 前端体验为主
                // 后端稳定为主
            if(err) {
                res.writeHead(500);  // 5xx 服务器错误
                res.end("Server error");
                return;
            }
            // 不只是html，css，js，jpg 
            res.writeHead(200 , {"Content-Type": "text/html"})
            res.end(content); // 响应内容
        })
    }
    // 后端路由，暴露资源
    // http://localhost:8080/style.css?a=1&b=2
    // 协议 http:// 域名 localhost  端口 /style.css path  queryString ?a=1&b=2
    if(req.method == 'GET' && req.url == '/style.css') {
        fs.readFile(
            path.join(__dirname , 'public', 'style.css'),
            (err , content) => {
                if(err) {
                    res.writeHead(500);
                    res.end("Server error");
                    return;
                }
                res.writeHead(200, {"Content-Type": "text/css"})
                res.end(content); // 响应内容
            }
        )
    }
    if(req.method == 'GET' && req.url == '/script.js') {
        fs.readFile(
            path.join(__dirname , 'public', 'script.js'),
            (err , content) => {
                if(err) {
                    res.writeHead(500);
                    res.end("Server error");
                    return;
                }
                res.writeHead(200, {"Content-Type": "text/javascript"})
                res.end(content); // 响应内容
            }
        )
    }
    if(req.method == 'POST' && req.url == '/login') {
        // 用户名和密码的校验
        // 处理post请求
        res.writeHead(200 , {
            'Set-Cookie': 'username=admin;',
            'Content-Type': 'application/json'
        })
        res.end(
            JSON.stringify({
                success: true,
                msg: '登录成功',
            })
        );
    }
    if(req.method == 'GET' && req.url == '/check-login') {
        if(req.headers.cookie){
            res.writeHead(200 , {
                'Content-Type': 'application/json',
            })
            res.end(JSON.stringify({
                loginIn: true,
                username: 'admin',
            }))
        } else {
            res.writeHead(200 , {
                'Content-Type': 'application/json',
            })
            res.end(JSON.stringify({
                loginIn: false,
                username: '',
            }))
        }
    }
})

// listen 监听端口号
server.listen(8080);