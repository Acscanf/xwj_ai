安装nextjs项目：npx create-next-app@latest repos
组件库：npx shadcn@latest init
 

- CSR  SPA 优点： 路由的切换就是页面的切换，没有刷新页面的操作，所以用户体验更好  缺点： SEO 不友好  #root
    移动端时代，流量入口不再是百度，应用市场
    Web app 体验好

- SSR 组件在服务端渲染
    组件在服务器端渲染
    页面渲染更快 SEO 好
    Web Site
    AI Web Site 在Google/Baidu  打榜的 
    AI 出海

- shadcn-ui
    - react-vant 组件库安装完后项目就慢了
        要按需加载 路由懒加载一样
    - shadcn-ui 更现代的前端框架
        直接是懒加载
        - base color 主题风格
    - 用的组件是按需安装的
        init 
        add

- next.js 约定俗称
    - app 
        可以不需要src
        app 应用目录
        - 目录即路由
            AppRouter
            repos/page.tsx

    - api
        后端接口定义

RESTful 是一种基于 HTTP 协议设计的软件架构风格，后端通过定义资源的 URI，利用 HTTP 动词（如 GET、POST、PUT、DELETE）对资源进行操作，实现前后端分离和接口的统一化管理。
        