# react repos 项目开发
- api.github.io/users/shunwuyu/repos
- 综合react开发全家桶、项目级别、大型的、性能



## 路由设计
    - react-router-dom
    - /repos/:username
    - /repos/:id
    - 懒加载
    - (路由守卫)
    - hash/history
    - useParams :username
## 数据管理
    App 数据管理
    repos 
    useContext + useReducer + hooks
    createContext + reducer + useRepos
## react
    组件的粒度小
## api
    fetch
    - axios http请求库
    - 独立的模块，所有的请求会从组件之中分离到api目录下 

## 项目的目录结构，项目架构
    - api
        - 应用中的所有的接口
    - main.jsx
        入口文件
        添加路由，SPA
        添加全局应用的状态管理

- RepoList 功能模块
    - params 解析访问的地址
        - useParams 动态参数对象
        - 不要放到useEffect里面
        - 效验id
            不要相信用户的任何提交
        - navigate('/') 放在 useEffect中使用
- 组件的开发模式
    - UI 组件 (JSX)
    - 自定义hooks useRepos方便
    - 状态管理 应用全局 context 来管    
        - repos loading error => context value
        - useReducer reducer 函数
    - 






























## react 下载的依赖
    1. 下载axios进行接口的请求
    2. 下载react-router-dom进行路由的配置


## react 项目的目录结构
    - api
        - 应用中的所有的接口
    - main.jsx
        入口文件
        添加路由，SPA
        添加全局应用的状态管理
    - components
        - 组件
    - pages
        - 页面
    - store
        - 状态管理
    - utils
        - 工具函数
    - context
        - 全局应用的状态管理
    - hooks
        - 自定义的hooks
    - router
        - 路由配置
    - public
        - 静态资源
    - src
        - 源代码
    - .gitignore
        - 忽略的文件
    - package.json
        - 项目的配置文件
    - README.md
        - 项目的说明文档


## 解释
    - 直接在main.jsx中添加全局状态管理<GlobalProvider/>组件，对它进行了封装
    - 也添加了路由管理可以自定义 BrowserRouter 和 HashRouter  路由

    - 在App.jsx中添加了路由懒加载Suspense，可以在路由加载的时候显示loading，也可以在路由加载完成的时候显示组件
    - 在任何没有定义的路由中用Navigate组件进行重定向，跳转到指定的路径

    - 用useParams 访问URL中的动态参数对象，返回的是一个对象



## 注意：
    - useParams获取动态路由参数不要放在useEffect中使用
    - useNavigate路由跳转，再判断完路由是否正确之后，如果不正确进行跳转，最好放在useEffect中使用



