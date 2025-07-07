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
            title: '智能识别手势发布命令',
            isCompleted: false
        },
        {
            id: 2,
            title: '算法比赛',
            isCompleted: false
        }
    ]);
    // 新增todo
    const addTodo = () => {
        // setTodos

    }

    return (
        <div className='app'>  
            Todos
            {/* 自定义事件 */}
            <TodoForm onAddTodo = {addTodo}/>
            <TodoList todos={todos}/>
        </div>
    )
}

export default Todos