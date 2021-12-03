import React from 'react'
import { useSelector } from "react-redux";
import TodoItem from './TodoItem';


function ToDoList() {
    const list = useSelector((state) => state.list);
    return (
        <div className="todos">
            <ol className="todo__list">
                {
                    list.map(todo=>(
                        <TodoItem key={todo.id} todo={todo} />
                    ))
                }
            </ol>
        </div>
    )
}
export default ToDoList