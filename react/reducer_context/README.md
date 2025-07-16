# reducer and context
- useReducer 的核心
    - 响应式状态管理
    - reducer 纯函数  生产状态 状态改变定规矩
        纯函数：不会影响到外界、相同的输出相同的输出、不会有副作用
    - initValue
    - dispatch 派发一个action
        {type: '' , payload}
- useContext
    createContext
    Context.Provider
    useContext
- useContext(通信) + useReducer(响应式状态管理)
    跨层级全局 -> 应用(theme/login/todos/..) 状态管理

- 自定义hook
    组件(渲染) + hook(状态)

- hook + useContext
    全局应用级别响应式状态
- hook + useContext + useReducer