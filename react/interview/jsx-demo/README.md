# JSX 考点
- 何为 JSX
    JS in XML (HTML 是 XML 的一种形式)
    react 推崇的JavaScript语法扩展，允许再JavaScript代码中嵌入HTML结构(function return JSX 组件)，
    常用React组件的定义，使得UI结构更直观易读。
    React的一大优点特性。
- JSX 可以直接运行么？
    不可以，需要编译后才能运行
- .styl -> stylus 编译 -> .css
<ul>
    <li key={todo.id}>{title}</li>
    <li key={todo.id}>{title}</li>
    <li key={todo.id}>{title}</li>
    ...
</ul>
- JSX -> React.createElement(tag , props , children) 
    - tag 标签名
    - props 标签属性
    - children 子元素