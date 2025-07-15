import { useState } from 'react'
import { 
  BrowserRouter as Router,  // 前端路由
  Routes,  // 路由设置容器
  Route,  // 单条路由
} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'  // 引入页面组件
import About from './pages/About'  // 引入页面组件
import UserProfile from './pages/UserProfiletttt'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      前端路由接管一切
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
