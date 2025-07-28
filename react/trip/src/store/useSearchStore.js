// search 全局共享状态
import {
    create
} from 'zustand'

import {
    getSuggestList,
    getHotList
} from '@/api/search'

const useSearchStore = create((set , get) => {
    // get 读操作
    const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    return {
        searchHistory,  
        suggestList: [],  // suggest 返回 list
        hotList: [],  // 热门搜索
        setSuggestList: async (keyword) => {
            const res = await getSuggestList(keyword);
            console.log(res);
            set({
                suggestList: res.data
            })
        },
        setHotList: async () => {
            const res = await getHotList();
            set({
                hotList: res.data
            })
        }
    }
})

export default useSearchStore