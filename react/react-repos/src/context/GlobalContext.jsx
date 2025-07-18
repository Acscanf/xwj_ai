import {
    createContext,
    useReducer,
} from 'react'
import {
    repoReducer
} from "@/reducers/repoReducer"

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const initialState = {
        repos: [],
        loading: false,
        error: null,
    }

    const [state, dispatch] = useReducer(repoReducer, initialState);
    return (
        // 应用状态
        <GlobalContext.Provider value={{state , dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}