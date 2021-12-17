import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { resetList,sortAlphabetically } from '../store/actions/todo';

export default function Footer() {

    const list = useSelector((state) => state.list);
    const dispatch = useDispatch();

    const isDoneList = list.filter(item => item.isDone )

    const reset = () => {
        dispatch(resetList())
    }
    const sort = () => {
        dispatch(sortAlphabetically())
    }

    return (
        <div className="footer">
            <div className="footer__block" >
                <h4> {isDoneList.length} / {list.length}</h4>
                <button className="btn btn__footer" onClick={reset}>clear completed</button>
                <button className="btn btn__footer" onClick={sort}>sort alph.</button>
            </div>
        </div>
    )
}
