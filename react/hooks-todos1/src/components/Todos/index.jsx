import {
    useState  // react 函数式编程 好用的以use 开头的函数
} from "react";
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"

const Todos = () => {
    // 数据流管理
    // 父组件持有管理数据 props 传递数据 子组件通过props 自定义函数
    // 通知父组件
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: '智能识别手势发布命令',
            isCompleted: false
        },
        {
            id: 2,
            text: '算法比赛',
            isCompleted: false
        }
    ]);
    // 新增todo
    const addTodo = (text) => {
        // setTodos
        // 数据状态是对象的时候
        setTodos([
            ...todos,
            {
                id: Date.now(),
                text,
                isCompleted: false,
            }
        ])
    }

    const onToggle = (id) => {
        // todos 数组找到id 为id，isComplete 变成 !isComplete
        // 响应式？ 返回一个全新的todos
        setTodos(todos.map(todo => todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo))
    }

    const onDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <div className='app'>  
            {/* 自定义事件 */}
            <TodoForm onAddTodo = {addTodo}/>
            <TodoList   
                todos={todos}
                onToggle={onToggle}
                onDelete={onDelete}
            />
        </div>
    )
}

export default Todos