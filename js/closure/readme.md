# 闭包
可以访问自由变量的函数就是闭包。

## 拆解函数
- 函数是一等对象
- 匿名函数、立即执行函数IIFE、函数表达式、箭头函数、递归函数(自己调用自己)
- 闭包、构造函数、this、参数

## 柯里化
柯里化是将多参数函数转化为一系列单参数函数的技术。
现实中，函数的参数是逐步收集的
- 真正要执行的函数fn fn.length 参数的数量是明确的
- 手写一个curry 功能函数，实现柯里化功能
    集齐七颗龙珠(大人物)，就可以召唤神龙
    - 返回函数的函数  递归函数
    - 每个参数的搜集（相似的小任务），递归