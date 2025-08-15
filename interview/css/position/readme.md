# position

- 五种属性值
    - static，默认值，不定位，回到文档流。
        让之前定位的元素回到文档流，取消定位。
    - relative 相对于自生位置偏移，不脱离文档流
    - absolute 相对于最近的非statice 祖先定位 脱离文档流
        如果没有，那就相对body定位
    - fixed 相对于浏览器窗口偏移，脱离文档流
    - sticky 粘性定位，是一种css定位方式，他让元素在滚动到特定阈值前表现得像相对定位，到达阈值后固定在视窗口中，实现类似吸顶或吸附的效果。

- 业务场景
    - 结合relative + absolute  消息提醒，在右上角
    - absolute + transform 水平垂直居中，模态框
    - fixed 回到顶部 聊天客服图标
    - sticky 粘连导航，不管页面多长，导航在超出阈值后，一直都在。
        table 表头粘连，距离最近的具有滚动机制的组件容器的
        和IntersectionObserver有点像

- 底层
    - 定位参照系
    absolute 最近 position ！== statice 的祖先 || body
    fixed 视窗？ bug
    sticky 依赖关东容器
    - 独立图层渲染
    absolute ？ + ？ 

- 适当使用transform：translate3d(0, 0, 0);
    GPU硬件加速，有利于CSS页面想能优化
    但也不能乱用，过多的图层会增加内存和管理开销
    比如，登录弹窗，transform/opacity 动画

    will-change：可以触发独立图层

- position：fixed 如果在transform：translateZ(0)下面会失效
    transform会有一个新的包含块，会导致fixed失效，不在相对于视窗口定位，而是相对于这个transform容器

## position 回答技巧
先干净利落回答五种特性，在举出应用场景，提底层原理，图层和fixed失效GPU加速 亮点。

- 页面的渲染过程
- intersectionObserver
- 重绘重排
- 性能优化