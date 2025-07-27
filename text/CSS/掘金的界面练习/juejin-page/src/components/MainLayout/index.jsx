import {
  Outlet,
  useNavigate,
  useLocation
} from 'react-router-dom'

import {
  Input,
  Button,
  Cell,
  Tabs
} from 'react-vant'

import {
  Search
} from '@react-vant/icons'

import {
  useState,
  useEffect
} from'react'

import useSearchStore from '@/store/Search.js'

import './Logo/iconfont.css'
import './index.css'

const items = [
  { title: '综合', path: '/' },
  { title: '文章', path: '/essay' },
  { title: '课程', path: '/course' },
  { title: '标签', path: '/label' },
  { title: '用户', path: '/user' }
]

const MainLayout = () => {
  const [active, setActive] = useState(0)
  const [text, setText] = useState()
  const { addSearch } = useSearchStore()
  const navigate = useNavigate()
  const location = useLocation()
  // 下面这个是用来控制当页面刷新的时候还是显示原来的页面
  useEffect(() => {
    const path = location.pathname
    const index = items.findIndex(item => item.path.startsWith(path))
    setActive(index)
  }, [])
  const handleClick = () => {
    if (text) {
      addSearch(text)
      setText('')
    } else {
      alert('请输入搜索内容')
    }
  }
  return (
    <div className="flex flex-col h-screen">
      <header>
        <div className="title">
          <span><b>20:50</b></span>
          <i className="iconfont icon-xinhao"></i>
          <i className="iconfont icon-4G"></i>
          <i className="iconfont icon-dianchi"></i>
        </div>
        <Cell>
          <Input
            value={ text }
            onChange={(e) => { setText(e) }}
            className="input"
            prefix={<Search />}
            suffix={<Button size="small" type="primary" onClick={ handleClick }>搜索</Button>}
            placeholder="搜索文章/课程/标签/用户"
          />
        </Cell>
      </header>
      <div className="demo-tabs">
        <Tabs
          defaultActive={0}
          active={active}
          onChange={(key) => {
            setActive(key)
            navigate(items[key].path)
          }}
        >
          {items.map((item, index) => (
            <Tabs.TabPane key={index} title={`${item.title}`}>
            </Tabs.TabPane>
          ))}
        </Tabs>
      </div>
      <div>
        <span>搜索历史</span>
        
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout