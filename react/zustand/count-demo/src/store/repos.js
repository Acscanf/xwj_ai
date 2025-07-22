// 请求
import {
    getRepoList
} from '../api/repo'

import {
    create
} from 'zustand'

export const useRepoStore = create((set) => ({
    repos: [],
    loading: false,
    error: null,
    fetchRepos: async () => {
       // 业务要写
       set({loading: true , error: null}) // 加载中
       try {
           const res = await getRepoList('shunwuyu');
           set({repos: res.data , loading: false})
       } catch (error) {
           set({error: error.message , loading: false}) // 错误
       }
    }
}))