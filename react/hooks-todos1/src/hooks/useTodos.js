import {
    useState,
    useEffect,
} from 'react';

export const useTodos = () => {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')));

    useEffect(() => {
        // console.log('```')
        // 接受字符串，用于初始化数据
        localStorage.setItem('todos' , JSON.stringify(todos))
    }, [todos])

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

    return {
        todos,
        setTodos,
        addTodo,
        onToggle,
        onDelete,
    }
}
