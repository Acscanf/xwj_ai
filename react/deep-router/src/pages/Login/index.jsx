import { 
    useState 
} from 'react'
import {
    useNavigate,  // Navigate 组件 js 跳转
    useLocation,  // 获取当前路径
}from 'react-router-dom'
const Login = () => {
    const location = useLocation()  // 获取当前路径
    // console.log(location.state.from);
    const navigate = useNavigate()  // navigate 能力
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (event) => {
        if(username === 'admin' && password === '123456') {
            localStorage.setItem('isLogin', 'true')
            navigate(location?.state?.from || '/')
        } else {
            alert('用户名或密码错误')
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>登录页面</h1>
            <input 
                type="text" 
                placeholder="请输入用户名" 
                value={username}
                onChange={(event) => {setUsername(event.target.value)}}
                required
            />
            <input  
                type="password" 
                value={password}
                onChange={(event) => {setPassword(event.target.value)}}
                placeholder="请输入密码" 
                required
            />
            <button type="submit">登录</button>
        </form>
    )
}

export default Login