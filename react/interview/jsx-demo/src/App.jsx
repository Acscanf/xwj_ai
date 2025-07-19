import { useState , createElement } from 'react'
import './App.css'

function App() {
  const [todos , setTodos] = useState([
    { id: 1, title: 'Learn React', completed: false },
    { id: 2, title: 'Build a project', completed: false },
    { id: 3, title: 'Have fun', completed: false },
  ])
  const element = <h1 className='title'>Hello, world!</h1>;
  const element2 = createElement('h1' , { className: 'title'} , "Hello , world!")
  return (
    <>
      <ul>
        {
          todos.map(todo => (
            <li key={todo.id}>
              <input type='checkbox' checked={todo.completed} />
              <span>{todo.title}</span>
            </li>
          ))
        }
      </ul>

      <ul>
        {
          todos.map(todo => (
            createElement('li' , {key:todo.id} , todo.title)
          ))
        }
      </ul>
    </>
  )
}

export default App
