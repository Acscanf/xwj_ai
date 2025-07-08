import TodoItem from './TodoItem'
const TodoList = (props) => {
    const {
        todos,
        onToggle,
        onDelete,
    } = props
    return (
        <ul className='todo-list'>
            {/* TodoList */}
            {
                todos.length > 0 ? (
                    todos.map((todo) => {
                        return (
                            <TodoItem  
                                key={todo.id} 
                                todo={todo}
                                onToggle={() => onToggle(todo.id)}
                                onDelete={() => onDelete(todo.id)}
                            /> // 数组的key 不能用index  用id 唯一标识  性能优化
                        )
                    })
                ) : (
                    <p>暂无待办事项</p>
                )
            }
            {/* <TodoItem/> */}
        </ul>
    )
}

export default TodoList