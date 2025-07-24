# jwt 登录鉴权
- 命令： pnpm i jsonwebtoken
- isLogin ， user 全局状态 zustand
- mock 模拟登录
    - apifox api请求模拟
    不用写页面，就可以发送请求
    curl

- 会话授权
    - 服务器知道我们是谁？
    - http是无状态的
        - 请求头 cookie
        - server 种下一个cookie 唯一sid值 sid => user
        - 每次请求中 从 cookie 读取到sid
        - 服务器多就知道是我们了

    - 登录和用户鉴权方案 JWT JSON Web TOKEN
        - {id: 112 , username: "帅的" , level: 4} user JSON 格式的数据
        - 一种算法 生成一个hash 串
        - token 服务器端令牌
        - 带上token
        - decode 解码
            {id: 112, username: "帅的", level: 4...}

- jsonwebtoken
    jwt 鉴权的库
    - sign 颁发一个token user 数据， secret 秘钥
    - verify 验证一个token
    - decode 解码一个token
    安装： pnpm i jsonwebtoken  和  pnpm i jwt
    用法：
        import jwt from "jsonwebtoken"
        const token = jwt.sign({id: 112, username: "帅的", level: 4}, "secret")
        console.log(token)
    - HTTP 的头部Authorization 字段
        - 携带token
        - 服务器验证token
        - 验证通过，返回数据
        - Cookie 每次自动带上
        - token需要手动设置的

- 加盐
    secret 秘钥 是一个字符串
    传递token 前面会加上 Bearer ${token}  ， Bearer 代表一个持有者
    通过 http headers Authorization 传递token

- 前端的用户权限状态  流程
    - zustand
        登录、user useUserStore
    - 登录页面
        受控或者非受控组件
    - 路由守卫
        登录状态，跳转到首页
        未登录状态，跳转到登录页
    - api/