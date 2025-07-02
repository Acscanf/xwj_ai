# 智能前端之单词学习
- 产品和商业模式
    - 学单词 
    - 拍照记单词
        - 图片交给多模态模型 word
        - deepseek AIGC 例句
        - tts 火山引擎 生成单词的读音

- focus
    拍照背单词，用单词
- 解决一些特定的效率性、创新性App

- npm init vite
    vite 是工程化脚手架，构建工具
- npm i 有一些慢
    react ... 项目的依赖
    pnpm 代替 npm
    不同的项目之中重复去安装了react
    react等包放到一个地方，如果之前安装过，直接饮用链接，只需要安装一次

## 项目中一定要安排的技能点
- pnpm
    npm i -g pnpm
- react 思想
    - 数据状态 useState 数据驱动视图
        数据 -> 视图
        数据变化 -> 视图变化
    - 响应式 数据状态变化，视图会自动更新
        数据变化 -> 视图变化
        视图变化 -> 数据变化
        - 不用频繁操作DOM，只需要关注业务
- 业务

- 镜像源
    - 查看镜像源
        pnpm config get registry
    - 切换镜像源
        阿里的镜像源
            npm config set registry https://registry.npmmirror.com
    - 组件化设计
        - PictureCard
    - 性能优化
        - linear-gradient 渐变，这样就不用加载背景图片
    - 用户体验
        - 上传图片的功能，预览功能
        - 无障碍访问
            label里面的htmlFor + input#id
    - es6 新特性
        ?. 可选链操作符
        ?? 空值合并操作符
    - html5 功能
        - file 文件对象