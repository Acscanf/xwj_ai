import { useState } from 'react'
import './App.css'
import Box from './components/Box'
import MotionBox from './components/MotionBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Box/>
      <MotionBox/>
    </>
  )
}

export default App
