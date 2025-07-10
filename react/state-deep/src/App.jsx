import { useState } from 'react'
import './App.css'

function App() {
  const [count , setCount] = useState(0);
  const [title , setTitle] = useState("");
  const [color , setColor] = useState("");
  const handleClick = () => {
    // 异步 不是同步
    // react 会合多次并更新  统一处理  性能优化 
    // 数据绑定，界面更新
    // JS 引擎  V8 ，高速过路费 渲染引擎  Blink 
    // 重绘重排
    // setCount(count + 1) 
    // setCount(count + 1)
    // setCount(count + 1) // 执行了三次，但是因为是异步的，所以每次都是count = 0 + 1，所以最后结果是1
    // setTitle("hello")
    // setColor("red")
    // setState 函数式跟更新语法
    // 保证每个更新都给予上一个最新的更新
    // 界面的更新合并为一次的，
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
  }

  return (
    <>
      <p>当前计数：{count}</p>
      <button onClick={handleClick}> +3 </button>
    </>
  )
}

export default App
