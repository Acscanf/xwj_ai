import {
    create
} from 'zustand'
import {
    doLogin
} from '../api/user'

export const useUserStore = create(set => ({
    user: null, // 用户信息
    isLogin: false, // 是否登录
    login: async ({username="" , password=""}) => { // 登录方法
        const res = await doLogin({username, password}) // 调用登录接口
        console.log(res, 'res'); // 打印返回的数据 可以看到token和user信息 以及cod
        const {token, data : user} = res.data // 解构出token和user信息
        console.log(token, user, 'token, user'); // 打印token和user信息
        localStorage.setItem('token', token) // 存储token到localStorage中
        set({ // 更新状态
            user, // 用户信息
            isLogin: true // 是否登录
        })
    },
    logout: () => {
        localStorage.removeItem('token') // 移除token
        set({ // 更新状态
            user: null, // 用户信息
            isLogin: false // 是否登录
        })
    }
}))