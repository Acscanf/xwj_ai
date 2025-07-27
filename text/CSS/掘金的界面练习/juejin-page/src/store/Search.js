import {
    create
} from 'zustand'

const useSearchStore = create((set) => ({
    search: ["谁杀死了比尔", 
        "tiantianup",
        "react",
        "Next.js全栈",
        "天天扭码",
        "150行",
        "mvvm手写",
        "mvvm",
        "虚拟dom",
        "奇趣",
        "来颗奇趣蛋",
        "字节常考算法题",
        "coze",
        "徐小夕",
        "淋巴",
        "vue源码解读",
        "奇趣蛋",
        "图雀",
        "面试题",
        "vue ts",
        "周榜",
        "ssh",
        "神光",
        "leetcode",
        "字节算法"
    ],
    addSearch: (term) => set((state) => ({ search: [term , ...state.search] })),
    removeSearch: () => set({ search: []}),
}))

export default useSearchStore