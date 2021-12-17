import React from 'react'
import { useSelector } from "react-redux";
import _ from 'lodash';
import TodoItem from './TodoItem';


function ToDoList() {
    let list = useSelector((state) => state.list);
    const sort = useSelector((state) => state.sort);
    const filter = useSelector((state) => state.filter);
    
    if (filter) {
        list = list.filter(l => l.text.toLowerCase().includes(filter.toLowerCase())) 
    }
    if (sort) {
        list = _.orderBy(list, l => l.text.toLowerCase())
    } 
    return (
        <div className="todos">
            <ol className="todo__list">
                {
                    list.map(todo => (
                        <TodoItem key={todo.id} todo={todo} />
                    ))
                }
            </ol>
        </div>
    )
}
export default ToDoList