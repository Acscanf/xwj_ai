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
    pnpm i react-router-dom zustand axios react-vant(UI组件库) lib-flexible(移动端适配)
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

## git 提交规范