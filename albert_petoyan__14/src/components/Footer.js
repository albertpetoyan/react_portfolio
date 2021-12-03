import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { resetList } from '../actions/todo';

export default function Footer() {

    const list = useSelector((state) => state.list);
    const dispatch = useDispatch();

    const isDoneList = list.filter(item => item.isDone )

    const reset = () => {
        dispatch(resetList(list))
    }

    return (
        <div className="delete">
            <div className="delete__all" >
                <h4> {isDoneList.length} / {list.length}</h4>
                <button className={"btn"} onClick={reset}>filter</button>
            </div>
        </div>
    )
}
