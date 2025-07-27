import { 
  Suspense,
  lazy,
} from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom'
import './App.css'

const MainLayout = lazy(() => import('@/components/MainLayout'))

const Synthesis = lazy(() => import('@/pages/Synthesis'))
const Essay = lazy(() => import('@/pages/Essay'))
const Course = lazy(() => import('@/pages/Course'))
const Label = lazy(() => import('@/pages/Label'))
const User = lazy(() => import('@/pages/User'))

function App() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Synthesis />} />
          <Route path="/essay" element={<Essay />} />
          <Route path="/course" element={<Course />} />
          <Route path="/label" element={<Label />} />
          <Route path="/user" element={<User />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
