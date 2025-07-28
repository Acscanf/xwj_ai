import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5173/api';

// 添加请求拦截器
axios.interceptors.request.use((config) => {
    // token
    return config;
})
// 添加响应拦截器
axios.interceptors.response.use((data) => {
    
    return data.data;
})



export default axios