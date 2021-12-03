import React, { useState } from 'react'
import { addItem } from '../actions/todo';
import { useDispatch} from "react-redux";
import {v1 as uuid} from 'uuid';

export default function Form() {

    const [text, setText] = useState("")
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addItem({
            id:uuid(),
            text,
            isDone:false
        }))
        setText("")
    }
    return (
        <form onSubmit = {
                    text == 0 ? null : handleSubmit
                } 
                className="input__block">
            <input type="text" className="input" placeholder="add your todo" 
              value={text} 
              onChange={(e)=>setText(e.target.value)}/>
            <button 
                className="add__btn" 
                style={
                    {
                      pointerEvents: text==0?"none":"auto",
                      opacity: text==0?0.6:1
                    }
                }
            >
                <i className="fas fa-plus"></i>
            </button>
        </form>
    )
}
