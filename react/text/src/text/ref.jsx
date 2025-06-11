import { useRef } from 'react'

export default function text1() {
    const ref = useRef(0);

    function handleClick() {
        ref.current += 1;
        alert(`你点击了按钮 ${ref.current} 次`)
    }

    return (
        <button onClick={handleClick}>
            点击
        </button>
    )
}