# tailwindcss 原子css

- 非常好用
- 几乎不用写css
- AI 生成代码 css 用的都是tailwindcss
- 配置流程
    pnpm i tailwindcss @tailwindcss/vite
    在vite.config.js 中引入tailwindcss 插件
        ```js
           import { defineConfig } from 'vite'
            import react from '@vitejs/plugin-react'
            import tailwindcss from '@tailwindcss/vite'

            // https://vite.dev/config/
            export default defineConfig({
            plugins: [  
                react(),
                tailwindcss()
            ],
            })
        ```
    在index.css中引入 `@import "tailwindcss"`;

- 有各种内置的css类名
- 1rem = 4 个单位

- 文字行数限制
    -webkit-line-clamp: 1; 不能独自生效
    -webkit 浏览器内核 Chrome + safari
    -mozilla 火狐浏览器内核代号
    实验阶段的属性 新的
    display： -webkit-box
    -webkit-box-orient: vertical;
    overflow: hidden;