import {
    useState,  // react 函数式编程 好用的以use 开头的函数
    useEffect,
} from "react";
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
import { useTodos } from "@/hooks/useTodos";

const Todos = () => {
    const {
        todos,
        addTodo,
        onToggle,
        onDelete,
    } = useTodos();
    // 数据流管理
    // 父组件持有管理数据 props 传递数据 子组件通过props 自定义函数
    // 通知父组件
    
    // 新增todo
    

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