import { createRoot } from 'react-dom/client'
import './index.css'
import 'lib-flexible'  // 移动端适配
import App from './App.jsx'
import {
  BrowserRouter as Router,
} from 'react-router-dom'  //路由

createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>,
)
