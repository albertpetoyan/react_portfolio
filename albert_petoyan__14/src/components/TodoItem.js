import 'font-awesome/css/font-awesome.min.css';

import React from 'react'
import { useDispatch } from "react-redux";
import { deleteItem } from '../actions/todo';
import { done } from '../actions/todo';


export default function TodoItem({todo}) {


    const dispatch = useDispatch();

    const handleDone = () => {
        dispatch(done(todo.isDone,todo.id))
    }
    const handleDelete = () => {
        dispatch(deleteItem(todo.id))
    }

    return (
        <li className="todo__item">
            <span style={ todo.isDone ? {"textDecoration":"line-through"}:null}> {todo.text}</span>
            <div className="icons">
                <i className="fas fa-check" onClick={handleDone}></i>
                <i className="fas fa-trash" onClick={handleDelete}></i>
            </div>
        </li>
    )
}

