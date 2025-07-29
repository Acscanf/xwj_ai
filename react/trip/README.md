# react 旅游 App
ReadMe.md 很重要  方便面试官
- 移动App
- 模仿 App
    - 喜欢的、国外的
    - 有点改变
- 绝大多数的考点
    - 都适用于任何App

## 技术栈
- React 全家桶
    React 组件开发
    组建的封装
    第三方组件库
    受控和非受控
    hooks编程  内置hooks和自定义hooks
    React-Router-DOM
        SPA
        路由守卫
        懒加载
    Zustand
- mock 接口模拟
- axios 请求拦截和登录
- jwt 登录
- module css
- vite  配置
- 性能优化
    防抖节流
    useCallback useMemo ...
- css 预处理器  stylus
    flex 布局
    transition
    transform
- LLM 流式输出
    - chat
    - 生图
    - 语言
    - coze 工作流 调用
    - 流式输出
- 移动端适配
    - rem
- 单例模式  设计模式的理解
- git 提交 编程风格

## 项目的架构
- components   组件
- pages    页面
- store    状态管理
- utils    工具类
- api      接口
- mock     模拟数据
- hooks    自定义hooks
- App.tsx  入口文件
- main.tsx  主入口文件
- index.tsx  根组件
- vite.config.ts  vite配置文件
- tsconfig.json  ts配置文件
- package.json  包管理文件
- public  公共文件


## 开发前的准备
- 安装的包
    pnpm i react-router-dom zustand axios react-vant(UI组件库) @react-vant/icons lib-flexible(移动端适配) postcss postcss-pxtorem
    开发期间的依赖
    pnpm i -D vite-plugin-mock jwt
- vite 配置
    - alias
    - mock
    - .env.local
    llm apikey
    - user-scalable=no  移动端不缩放
    - css 预处理
        index.css   react
        box-sizing  font-family: -apply-system
        App.css     全局通用样式
        module.css  模块化样式
    - 移动端适配 rem
        不能用px，用相对单位rem html
        不同设备上体验要一致
        不同尺寸手机上，等比例缩放
        设计师设计稿 750px iphone 4   375pt * 2 = 750
        小米 
        css 一行代码  手机的不同尺寸 html font-size 等比例
        layout
        flexible.js 阿里 在任何设备上(pnpm i lib-flexible)
        1rem = 屏幕宽度 / 10
- lib-flexible
    阿里开源
    设置html font-size = window.innerWidth / 10
    1rem = 屏幕宽度 / 10
    css px 宽度 = 手机设备宽度 = 375
    1px = 2发光源
    750px 设计稿

- 设计稿上一个盒子的大小？
    - 1像素不差的还原设计稿
    - 设计稿中像素单位
    - /75

## 项目亮点
- 移动端适配
    - lib-flexible   1rem = 屏幕宽度 / 10
    - 设计稿 尺寸是iphone 标准尺寸 750px
    - 前端的职责是还原设计稿
    - 频繁的单位转换  200 / 75 换算
    - 自动化？
        pnpm i -D postcss postcss-pxtorem
        postcss 是css 预编译期，很强大
        vite自动读取postcss.config.js 将css内容编译  px -> rem

- 页面刷新不跳转，在MainLayout中， useLocation() 监听路由变化

- 前端智能
    - chat 函数
    - 对各家模型比较感兴趣，升级为kimiChat，doubaoChat...
        性能、能力、性价比
        随意切换大模型，通过参数抽象

- 原子css
    - App.css 里面添加通用样式
    - 各自模块里module.css 不影响别的组件
    - lib-flexible 移动端适配
    - postcss pxtorem 插件 快速还原设计稿
    - 原子类的css
        一个元素按功能逻辑拆分成多个类，和原子一样
        元素的样式就可以由这些原子类组合而成
        样式复用的更好，以后几乎可以不用写样式

- 用户体验
    - 搜索建议， 防抖 + useMemo 性能优化
    - 组件粒度划分
        React.memo + useCallback
    - 懒加载
    - 热门推荐 + 相关商品(产品)
    - SPA
    - 骨架屏  不用让用户等待了
## git 提交规范
- 项目初始化
## 功能模块
- UI 组件库
    - pnpm i react-vant 安装
    - react-vant  第三方组件库  70% 组件已经有了，不用写
    - 选择一个适合业务的UI组件库 或者 公司内部的组件库
    - pnpm i @react-vant/icons    图标库
- 配置路由及懒加载
    - 懒加载
    - 路由守卫
    - Layout 组件
        - 嵌套路由Outlet 分组路由配置
        - 网页有几个模板 Layout
            - tabbar 模板
            - blank 模板
    - tabbar
        - react-vant + @react-vant/icons
        - value + onChange 响应式
        - 直接点击链接分享 active 的设置

- chatbot 模块
    - 添加了一个llm模块
    - 迭代chat，支持任意模块

- Search 
    - 防抖
    - api
        GooleSuggest
    - localStorage

- 自定义Hooks
    - useTitle  (一定要设置)

- es6 特性使用
    tabbar 的高亮
    - arr.findIndex()  找到数组中满足条件的第一个元素的索引
    - arr.startWith()  判断数组是否以某个元素开头


- 项目迭代
    - 功能由浅入深 
    - chatbot deepseek 简单chat 
    - deepseek-r1  推理模型 
    - 流式输出 
    - 上下文 LRU 算法
    - coze 工作流接口调用 

## 项目遇到过什么问题
    - chat messages 遇到message 覆盖问题
    - 闭包陷阱问题
        一次事件里面，两次setMessages()  第二次会覆盖第一次的结果


## 通用组件开发
- Loading 
    - 居中方案 
        position： fixed + tlrb0 + margin auto
    - React.memo 无状态组件，不重新渲染
    - animation