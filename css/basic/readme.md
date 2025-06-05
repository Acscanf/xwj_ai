# css 基础

- 一个属性与值的键值对称为申明 declaration
- 一个申明块{} 中可以有多个申明
- 选择器 申明块作用的选择器选择的对应元素
- ruleset 多个
- css 层叠样式表

## css 选择器
+ 兄弟选择器 ： 只会选择同层的相邻的兄弟元素
~ ： 通用兄弟选择器，选择后续的同级元素

伪类选择器
CSS伪类用于定义元素特殊的状态，比如：:hover 鼠标悬停、:active 鼠标点击、:first-child 第一个子元素等。

// 序号
结构伪类
.container :nth-child(3) 

.container 里面的第三个p元素