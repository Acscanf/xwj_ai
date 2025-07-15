# react-router-dom

- 路由？
    - 后端路由
        暴露资源
    - 前端路由
        - 首页
        - 列表页
        - 登录...
        前端页面导航由前端路由负责
- react 开头
    react 生态系统的一部分
    - react
        响应式、状态管理，组件、hooks 等核心功能
        - 体积大、笨重
        - 页面慢
        - 少就是多
    - react-router-dom
    - redux/mobx
    - axios

## react 开发全家桶
- react 19
- react-dom 19
- react-router-dom 7.6.3

## react 特色
- 全面组件化
    vue 更执着的地方
    react 函数化编程
- 动态路由
    https://juejin.cn/users/123?a=1&b=2#hash
    path : "/users/:id"  params
    # restful 国际规范
    url 定义是核心部分
    Method 资源的描述
    GET /user/:id
    GET /post/:id 显示谋篇文章
    POST /post 新建文章
    PATCH /post/:id 修改文章

    PUT(替换)  PATCH(局部)  修改
    上传头像 PUT /avatar/:id

    DELETE /post/:id 删除文章
    HEAD /post/:id 检查文章是否存在
    - 后端路由 暴露资源

- 前端路由
    
- 后端路由
    早期只有后端路由
    server->http->路由(后端)->响应HTML网页 传统的后端驱动的web开发方式