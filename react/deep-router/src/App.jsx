import { 
  useState ,
  lazy, // 懒加载
  Suspense // 等待加载
} from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Navigation from './components/Navigation'
import ProtectRoute from './pages/ProtectRoute'
import Pay from './pages/Pay'
// 函数  路由 -> Route
// 新的组件
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Login = lazy(() => import('./pages/Login'))

// import Home from './pages/Home'
// import About from './pages/About'
// 30几个页面

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navigation />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              {/* 鉴权 */}
              <Route path='/pay' element = {
                <ProtectRoute>
                  {/* <Pay /> */}
                  <div>123</div>
                  <div>456</div>
                </ProtectRoute>
              } />
              <Route path="*" element={<NotFound/>} />
            </Routes>
          </Suspense>
      </Router>
    </>
  )
}

export default App
