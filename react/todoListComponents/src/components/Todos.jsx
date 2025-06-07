// 列表的渲染
function Todos(props) {
    // 如何拿到父组件传过来的数据状态呢？传参
    const todos = props.todos; // 拿到父组件传过来的数据状态，todos 数组，里面是对象，对象有三个属性，id，text，complete
    return (
        <ul>
            {
                todos.map(todo => ( 
                    <li key={todo.id}>{todo.text}</li>
                ))
            }
        </ul>
    )
}
export default Todos;