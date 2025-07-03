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

## react 语法
- 单向数据流
    数据状态流动
    - 父组件负责提供数据，和api 接口请求
    - 拆成多个子组件 
    - 数据会从父组件流向子组件
    - 子组件负责消费数据 专注于显示
    - props
        <PictureCard/
            uploadImage = {uploadImage}
        >
        函数参数一样 可以解构

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
        - App
            - 提供数据
            - 图片上传大模型
            - 父组件负责提供数据，数据的请求
            - 先要给父组件
        - PictureCard
            单向数据流
            - 子组件只负责消费数据
            - 父组件负责提供数据，数据的请求
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
- 智能
    - 多模态模型
        ？ 月之暗面 base64
        prompt？
            - prompt 设计原则
                - 给它一个明确的身份 LLM交流 当人
                - 清晰且具体的任务
                - 限制，指定结果
                    返回的结构 JSON
                    有利于接下来的业务执行
                    拿着大模型的回答接着干活
                    JSON 是最好的接口格式
                - 分步做

"{
  "image_discription": "The image shows a figure that appears to be a woman standing with her back to the viewer. She is wearing a dress that is adorned with sparkling details, and the background is a soft, pastel blend of colors.",
  "representative_word": "Dress",
  "example_sentence": "She wore a beautiful dress to the party.",
  "explaination": "Look at the image. The woman is wearing a dress.\nA dress is a garment typically worn by women or girls.\nIt covers the body and hangs down from the shoulders.\nDresses come in many styles and colors.\nDo you have a favorite dress for special occasions?",
  "explaination_replys": ["Yes, I have a red dress that I love to wear for parties.", "I prefer simple dresses for everyday wear."]
}
"
    