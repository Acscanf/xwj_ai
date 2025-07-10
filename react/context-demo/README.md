# useContext
- 组件层次太深，组件通信机械化
- 上下文对象 **全局**状态共享
- 使用流程
    - 创建一个上下文对象
    - provider 全局申明
    - 在任何地方 ， useContext 使用状态

## 数据状态共享，肯定不只有一种方式
- 组件单向数据流通信
- 创建一个上下文对象
    - 在它Provider的内部，useContext 拿到状态
    ThemeContext.Provider 组件，react的一贯作风，讲组件进行到底