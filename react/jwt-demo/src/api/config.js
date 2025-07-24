import axios from 'axios'
// 配置axios的baseURL
axios.defaults.baseURL = "http://localhost:5173/api"
// interceptors: 拦截器  
axios.interceptors.request.use((config) => {
    // 从localStorage中获取token
    const token = localStorage.getItem('token') || '';
    // 如果token存在，则将其添加到请求头中
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config
})
axios.interceptors.response.use(res => {
    console.log('/////')
    return res
})
export default axios