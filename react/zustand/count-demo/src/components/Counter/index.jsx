import {useCounterStore} from '../../store/count'
// 来自store
const Counter = () => {
    const {
        count,
        increment,
        decrement,
    } = useCounterStore()
    return (
        <>
            <button onClick={increment}>+</button>
            Count: {count}
            <button onClick={decrement}>-</button>
        </>
    )
}

export default Counter