const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500'); // 允许所有来源访问
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH, HEAD'); // 允许的请求方法
    // if(req.url === '/api/test' && req.method === 'GET') {
    //     res.writeHead(200, {
    //         'Content-Type': 'application/json',
    //         'Access-Control-Allow-Origin': '*', // 允许所有来源访问

    //     })
    //     res.end(JSON.stringify({
    //         code: 0,
    //         msg: "跨域成功！！！"
    //     }))
    // }

    // 浏览器发送一个预检请求，请求方法为OPTIONS，请求头中包含Access-Control-Request-Method和Access-Control-Request-Headers
    if(req.method === 'OPTIONS') { // 预检请求
        res.writeHead(200)
        res.end()
        return;
    }

    if(req.url === '/api/test' && req.method === 'PATCH') {
        res.writeHead(200, {
            'Content-Type': 'application/json',
        })

        res.end(JSON.stringify({
            code: 0,
            msg: "跨域成功！！！"
        }))
    }
})

server.listen(8000, () => {
    console.log('Server is running on port 8000');
})