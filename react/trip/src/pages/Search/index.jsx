import SearchBox from '@/components/SearchBox'
import useSearchStore from '@/store/useSearchStore.js'
import styles from './search.module.css'
import { useState , useEffect , memo} from 'react'

const HotListItems = memo((props) => {
    const { hotList } = props;
    return (
        <div className={styles.hot}>
            <h1>热门推荐</h1>
            {
                hotList.map(item => (
                    <div key={item.id} className={styles.item}> 
                        {item.city}
                    </div>
                ))
            }
        </div>
    )
})

const Search = () => {
    const [query, setQuery] = useState('');
    const { suggestList , setSuggestList , hotList , setHotList } = useSearchStore();
    const suggestListStyle = query !== "" ? {display: 'block'} : {display: 'none'};

    useEffect(() => {
        setHotList();
    }, [])
    // 单向数据流
    // 反复生成 useCallback
    const handleQuery = (query) => {
        // 只用它才能 api 请求
        console.log('debounce后' , query)
        setQuery(query);
        if (!query) {
            return ;
        }
        setSuggestList(query)
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <SearchBox handleQuery={handleQuery} />
                {/* 维护性更好 */}
                <HotListItems hotList={hotList} />
                <div className={styles.list} style={suggestListStyle}>
                    {
                        suggestList.map(item => (
                            <div key={item} className={styles.item}>
                                {item}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Search