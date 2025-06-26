# 回流重绘
- 布局难点 列式布局和理解BFC/FFC 
    - html 根元素 最外层的第一个BFC 元素
        Block Formatting Context 块级从上到下，行内从左到右，BFC
        有了文档流
    - float overflow：hidden flex
    - 有没有什么标签 可以做列式布局 table 
    tr td
    - 为什么不用？
        - 触发太多的回流和重绘
        - 语义不和table数据表
            tr th
            td column
        - 不够灵活

## 回流和重绘
- 回流 重排 reflow
    当RenderTree 中部分或全部元素的尺寸，结构、或某些属性发生改变，浏览器重新渲染部分或全部文档的过程叫回流。
    table 不适合，table中局部的改变，会触发整个table的回流重排
    火烧赤壁
    display: none 不参与回流重绘 性能优化的一种方案
    - 触发回流(重排 reflow) 的方式
        1. 页面首次渲染(严格意义上不是，最耗时的)
        2. 浏览器窗口大小改变
        3. 元素尺寸、位置、内容发生改变(transition,transform/opacity新图层除外)
        4. 元素字体大小变化 (appendChild removeChild)
        5. 增加或者删除可见的DOM元素
        6. 激活CSS伪类（例如：hover ? 浏览器需要重新计算元素的样式和布局,所以虽然只改变的是颜色，但是还是触发的是回流而不是重绘）
        7. 查询某些属性或调用某些方法
            - img.getBoundingClientRect() 触发回流
            ret {
                
            }
- 重绘 repaint
    当页面元素样式的改变并不影响它在文档流中的位置
    比如： color、background-color、visibility (hidden show 属性)

## 页面是怎么渲染的？
- 输入url
- 下载html
    - 下载字节 
    - html 字符 utf-8 编码
    - 解析html 开关标签 属性 ...
    - 构建DOM 树
- link css 下载css
    - 下载字节码 Content-Type text/html  text/css
    - 编码 utf-8 得到css文本
    - token 词法分析
    - css rule 节点
    - cssom Tree
    - Layout 树
        布局 ， 盒模型 ， 大小 确定元素在文档流中的位置和大小
    - 图层
        - z-index
        - position:fixed 弹窗
        - transition + transform / opacity
        animation
        - translate(50%,50%,50%) Z GPU 加速
        1个图层 主要文档流图层 = DOM树 + CSSOM -> RenderTree <-> LayoutTree
        2个图层 = DOM树 + CSSOM -> RenderTree <-> LayoutTree
        ...
    - 图层的合并
    - 浏览器的渲染引擎 绘制平面 像素点绘制