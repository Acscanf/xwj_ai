import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'; // vite 脚手架 工程化工具  node

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // 路径的别名
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
