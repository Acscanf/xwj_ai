import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'lib-flexible'  // 移动端适配
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
