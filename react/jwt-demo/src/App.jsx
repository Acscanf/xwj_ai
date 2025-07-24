import { 
  useState ,
  useEffect,
  lazy,
  Suspense,
} from 'react'
import './App.css'
import {
  Routes,
  Route,
} from 'react-router-dom'
import NavBar from './components/NavBar'
const Home = lazy(() => import('./views/Home'))
const Login = lazy(() => import('./views/Login'))
const Pay = lazy(() => import('./views/Pay'))
const RequireAuth = lazy(() => import('./components/RequireAuth'))


function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    
  }, [])
  return (
    <>
      <NavBar />
      <Suspense fallback={<div>Loading....</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pay" element={
            <RequireAuth>
              <Pay />
            </RequireAuth>
          } />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
