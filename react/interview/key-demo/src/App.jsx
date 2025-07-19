import { useState , useEffect } from 'react'
import './App.css'

function App() {
  const [todos , setTodos] = useState([
    {
      id : 1,
      title: '标题一',
    },
    {
      id : 2,
      title: '标题二',
    },
    {
      id : 3,
      title: '标题三',
    }
  ])

  useEffect(() => {
    setTimeout(() => {
      // setTodos((prev => prev.map(todo => {
      //   if(todo.id === 1) {
      //     return {
      //       ...todo,
      //       title: '标题一更新',
      //     }
      //   }
      //   return todo
      // })))

      // setTodos(prev => [
      //   ...prev,
      //   {
      //     id : 4,
      //     title: '标题四',
      //   }
      // ])

      setTodos(prev => [
        {
          id : 4,
          title: '标题四',
        },
        ...prev,
      ])
    }, 5000)
  }, [todos])
  return (
    <ul>
      {
        todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))
      }
    </ul>
  )
}

export default App
