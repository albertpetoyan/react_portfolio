import 'font-awesome/css/font-awesome.min.css';
import { useNavigate } from 'react-router'
import React from 'react'
import { useDispatch } from "react-redux";
import { deleteItem, done } from '../store/actions/todo';


export default function TodoItem({todo}) {

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleDone = () => {
        dispatch(done(todo.isDone,todo.id))
    }
    const handleDelete = () => {
        dispatch(deleteItem(todo.id))
    }
    const handleEdit = () => {
        navigate(`/edit/${todo.id}`)
    }

    return (
        <li className="todo__item">
            <span style={ todo.isDone ? {"textDecoration":"line-through"}:null}> {todo.text}</span>
            <div className="icons">
                <i className="fas fa-check" onClick={handleDone}></i>
                <i className="fas fa-edit" onClick={handleEdit}></i>
                <i className="fas fa-trash" onClick={handleDelete}></i>
            </div>
        </li>
    )
}

