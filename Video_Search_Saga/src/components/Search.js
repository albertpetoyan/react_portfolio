import React, { useState,useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import {videoReq,popularR} from '../store/action';

export default function Search() {

  const [text, setText] = useState('')
  const dispatch = useDispatch() 

  const onInput = (e) => {
    setText(e.target.value)
  }
  const onSearch = (e) => {
    e.preventDefault()
    dispatch(videoReq(text))
  }

  useEffect(() => {
    dispatch(popularR())
  }, []);

    return (
      <div className="block">
        <div className="header">
          <h1>Video Search</h1>
        </div>
        <form onSubmit={onSearch} className="input-group mb-3">
          <input 
            onChange={onInput}
            value={text}
            type="text"
            className="form-control" 
            placeholder="Search"
          />
          <button className="btn btn-outline-secondary" type="submit" >Search</button>
        </form>
      </div>
         
    )
}
