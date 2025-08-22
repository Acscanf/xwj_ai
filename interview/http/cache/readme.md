# 缓存
## URL 输入到页面显示
- 知识体系
- 多进程多线程架构是前提
- 输入网址并解析
    非结构字符串，搜索关键字
    有结构的字符串，解析成协议、域名、端口、路径、查询参数、锚点
    协议://域名：端口/path?query#hash
    http(s)
    web 80 nginx proxy 3000
    443 https

- 浏览器解析协议、主机、端口、路径等，并**构造**一个http请求
    - 发送请求前，根据请求头expires 和 cache-control 判断是否命中强缓存策略。
        https://www.baidu.com/index.js + 请求头
        缓存文件 + 请求头在一起(文件的属性一样)
    - 强缓存
        Expires 过期时间 http 1.0 缺点是用户时间不准
        响应头cache-control + 文件本地缓存，在过期时间范围内，不用请求，直接用本地缓存内容  http 1.1  升级为cache-control

    - 协商缓存
        强缓存没有命中，过期了，这个资源在服务器端也不一定修改了
        

    Cookie
    url 背后的，请求行、请求头、请求体
    同一主机的不同端口 对应的是不同的程序或服务
    dns -> id 地址 80 -> http 443 https  3306 mysql
    - 补全url
    比如输入的是baidu.com    https://www.baidu.com/
    - http://www.baidu.com  不安全
        307 跳转 Temporary Redirect
        Location：https://www.baidu.com/
        在请求一次
        301 永久跳转                   302 临时跳转    资源跳转，支持的是get请求
        308 Permanent Redirect        307 临时跳转

        301/302  只支持get，哪怕你的请求不是GET，也会改成GET
        307/308  支持所有的请求方法，不会改变请求方法