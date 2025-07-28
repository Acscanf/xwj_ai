import useSearchStore from '@/store/Search.js'
import "./index.css"

const Synthesis = () => {
    const { search, isHidden } = useSearchStore();
    return (
        <div>
            <ul>
                {!isHidden ? '' : search.map(item => <li key={item}>{item}</li>)}
            </ul>
        </div>
    )
}

export default Synthesis