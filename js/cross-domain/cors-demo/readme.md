# 进阶跨域方案 cors

- 日常用的最多的跨域解决方案
    JSONP 不跨域
    CORS 跨域
    浏览器会发送CORS 请求，如果服务器端的响应头设置了Access-Control-Allow-Origin ，则浏览器会放行响应数据，否则会被浏览器拦截
    后端实现了CORS，可以跨域
    *
    白名单

    - 简单跨域请求
        GET/POST/HEAD 简单设置下Access-Control-Allow-Origin 就好
        Content-Type text/plain multipart/form-data 
        application/x-www-form-urlencoded
        简单跨域请求 不会发送预检请求
    - 复杂跨域请求
        其他的方法 安全升级
        - 预检请求
            给他一个200响应，告诉他可以跨域
            Access-Control-Allow-Methods
            Access-Control-Allow-Heads
            ....
            METHOD OPTIONS 预检请求
        - 真正的请求


- 使用命令： nodemon app.js 可以自动重启服务，不用每次修改代码都要重启服务