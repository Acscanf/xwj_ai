# Storage 存储
    - 前端存储
        - localStorage
        - sessionStorage
        - cookie
            存储什么？
                - 登录状态
                - 购物车
        - indexDB
    - 后端存储
        MySql、NoSql、MongoDB
    - 缓存

## 首页
- 用户的登录状态
    cookie
    - 服务器识别用户
    - B/S 架构软件 http 协议
    - http 0.9 版本 没有身份
    - http 是无状态协议
        请求一次和1000次，没有任何关系，拿到的内容都是一样的
        请求过程中带上身份状态？
    - http 1.0 正式版本
        才有了header 请求头
        Content-Type:  
        Authorization 
        Cookie uid = 1231212
        用户带上，服务区解析 你的身份了
        http 协议还是无状态的，请求头 可以加带一些私货
    - 界面有哪些状态
        未登录 已登录  登录之后显示用户身份 时间 过期 主动登出
    
- 前后端联调
    - 前端负责表单
        阻止默认行为
        收集表单数据
        fetch 请求 await 等待服务器端响应请求 
        POST /login api 地址 前后端接口
    - 后端负责处理
        路由 /login
        用户名和密码的校验
        通过设置cookie 响应头 Set-Coolie
        服务器端的返回 http 一起回到请求端
        前端存储里 Cookie 有了内容

## Cookie
Cookie 是一种存储在用户浏览器中的小文本文件，用于存储用户的会话信息。它通常包含用户的身份验证令牌、用户首选项和其他与用户相关的数据。
    - 每次http的时候，会自动带上cookie 信息
    - cookie 小饼干 (内容小) 关键的身份信息，存储在浏览器中(位置)
    - http 协议还是无状态的，每次请求独立，他是通过在请求头中携带的cookie信息，实现身份认证