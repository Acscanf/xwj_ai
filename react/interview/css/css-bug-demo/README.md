# css 模块化
- Button AnotherButton 按钮组件
    自己写的组件
    别人写的组件
    第三方的组件
    冲突
- 唯一的类名
    取名 烦了
    css 模块化的能力
    不会影响外界
    不受外界影响
- style.module.css 模块化
    - react vite
        确保唯一hash 值 加到原类名上
    - vue scoped
    - 可读性会受到影响不？
        - 读的是源代码，看的还是button，所以不会受到影响
        - 被模块化保护起来了
        - npm run build
- dev/build/text/product
    开发的时候在dev 代码的可读性
    vite,react.jsx babel prest-react
    style.module.css
    import styles from './style.module.css'
    styles 变成了 js 对象， css的每一个类型都可以面向对象访问绑定

    npm run build
    npm run text 测试一下
    aliyun ngnix 跑起来 dist/