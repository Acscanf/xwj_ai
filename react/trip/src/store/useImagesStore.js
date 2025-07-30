import { create } from 'zustand'
import { getImages } from '@/api/home'

const useImagesStore = create((set, get) => ({
    images: [], // 图片列表
    page: 1, // 当前页码
    isLoading: false, // 是否正在加载
    fetchMore: async () => {
        // 如果还在请求中，不在发起新的请求
        if (get().isLoading) return // 如果正在加载，直接返回
        set({ isLoading: true }) // 设置正在加载状态为 true
        const res = await getImages(get().page) // 调用 getImages 函数获取图片列表数据
        console.log(res)
        if (res.code === 0) { // 如果请求成功
            // 之前的状态
            set((state) => ({ // 更新状态
                images: [...state.images, ...res.data], // 将新获取的图片列表数据添加到 images 数组中
                page: state.page + 1, // 将页码加 1
                isLoading: false // 设置正在加载状态为 false
            }))
        }   
    }
}))


export default useImagesStore