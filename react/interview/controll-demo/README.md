# 受控组件和非受控组件

- 表单、收集用户数据
    - 受state控制
        value={state} onChange={(e) => setState(e.target.value)}
        强大是因为性能开销    性能差
        表单的检测等功能  ，通过防抖和节流来解决
    - 非受控
        另外一种 收集用户输入的方法
        性能好  交互不强的
        