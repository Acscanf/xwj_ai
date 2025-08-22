const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
    if (request.url === '/') {
        // index.html
        // async 异步 sync 同步
        // fs.readFile('test.html', 'utf-8', (err, data) => {

        // })
        // 性能差点
        const html = fs.readFileSync('test.html', 'utf-8');
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'Cache-Control': 'max-age=20,public'
        });
        response.end(html)
    }
    if (request.url === '/script.js') {
        response.writeHead(200, {
            'Content-Type': 'text/javascript',
            'Expires': new Date(Date.now() + 20 * 1000).toGMTString(),
        });
        const script = fs.readFileSync('script.js', 'utf-8')
        response.end(script)
    }

})
.listen(8888)