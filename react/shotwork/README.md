# AI 单词拍照移动应用

- mobile App
- css reset
- 组件划分思维
    - 功能逻辑划分 图片上传
    - App 根组件
    - PictureCard 子组件
    - 组件通信
        - 父组件负责持有状态
        - 父组件api请求
        - 子组件消费数据
        - state(私有的数据状态)、props(父组件传入的数据状态) 都是数据
        - 子组件修改状态，通过回调函数通知父组件，父组件修改状态


- 目录结构
    - src/  开发目录
    - components/   组件目录
        - 一个组件就是一个目录
            - index.jsx
            - style.css
    - public/   静态资源目录
    - libs/ 可复用的工具包
    - .env.local
        ai api-key token  等环境变量












注意事项：
    1. 父子组件的命名是不是根据类的名字还是根据函数的名字？
    2. props传值是不是根据跟数据和命名有关？
    3. import 'a.css'  和  import ... from ...
    4. input 和 label 的关系
    5. 'Content-Type': 'application/json', 为什么'Content-Type'一定要加引号，而Authorization可以不用加