import { 
  useState ,
  useEffect,
} from 'react'
import './App.css'
import {
  getTodos,
  getRepos
} from '@/api'

function App() {
  const [todos, setTodos] = useState([])
  const [repos , setRepos] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      // const todosResult = await getTodos()
      // console.log(todosResult) // 打印结果看一下，有什么需要处理的地方，比如数据结构，比如请求失败的情况，比如请求成功的情况等等，具体情况具体分析，这里就不做处理了，直接使用返回的数据进行渲染
      // setTodos(todosResult.data.data)
      const reposResult = await getRepos();
      setRepos(reposResult.data.data)
    }
    fetchData()
  }, [])

  return (
    <>
      {/* {
        todos.map(todo =>  (
          <div key={todo.id}>
            {todo.title}
          </div>
          )
        )
      } */}
      {
        repos.map(repo => (
          <div key={repo.id}>
            {repo.name}
          </div>
        ))
      }
    </>
  )
}

export default App
