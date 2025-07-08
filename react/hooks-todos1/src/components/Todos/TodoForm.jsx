import {
    useState  // 私有状态
} from "react";

const TodoForm = ({ onAddTodo }) => {
    // 数据
    // props 参数数据
    // state 私有数据
    // 单项数据流
    const [text , setText] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        let result = text.trim();
        if(!result) return ;
        onAddTodo(result)
        setText(''); // 对数据状态和界面状态要一致要敏感
    }

    // JSX 一定得有唯一的最外层元素  树来编译解析JSX
    return (
        <>
            <h1 className="header">
                TodoList
            </h1>
            <form className="todo-input" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={text} // 数据绑定 双向绑定  数据驱动视图
                    onChange={(e) => {setText(e.target.value)}} // 事件绑定  事件驱动数据
                    placeholder="Todo Text"
                    required
                />
                <button type="submit">Add</button>
            </form>
        </>
    )
}

export default TodoForm