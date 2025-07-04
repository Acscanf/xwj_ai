import {
    useState,
    useEffect
} from 'react';
const Timer = () => {
    const [time , setTime] = useState(0);


    console.log('组件函数执行')
    console.log('JSX编译')
    useEffect(() => {
        console.log('组件渲染完成')
        const interval = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000)
        return () => {
            console.log('组件卸载')
            clearInterval(interval)
            setTime(0)
        }
    },[]);
    return (
        <div>
            已经运行了{time}秒
        </div>
    )
}

export default Timer;