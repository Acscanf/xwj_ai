import './App.css'
import {
  Suspense,
  lazy,
} from 'react'
import {
  Routes,
  Route,
  Navigate,
} from'react-router-dom'

import MainLayout from '@/components/MainLayout'
import BlankLayout from '@/components/BlankLayout'
import Loading from '@/components/Loading'

const Home = lazy(() => import('@/pages/Home'))
const Search = lazy(() => import('@/pages/Search'))
const Login = lazy(() => import('@/pages/Login'))
const Account = lazy(() => import('@/pages/Account'))
const Collection = lazy(() => import('@/pages/Collection'))
const Discount = lazy(() => import('@/pages/Discount'))
const Trip = lazy(() => import('@/pages/Trip'))
const Detail = lazy(() => import('@/pages/Detail'))



function App() {

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* 带有tabbar的Layout */}
          <Route element={<MainLayout />}>
            <Route path='/' element={<Navigate to="/home" />}  />
            <Route path='/home' element={<Home/>}  />
            <Route path='/discount' element={<Discount/>}  />
            <Route path='/trip' element={<Trip/>}  />
            <Route path='/account' element={<Account/>}  />
            <Route path='/collection' element={<Collection/>}  />
          </Route>
          {/* 不带tabbar的Layout */}
          <Route element={<BlankLayout />}>
            <Route path='/search' element={<Search />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/detail/:id' element={<Detail />}/>
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
