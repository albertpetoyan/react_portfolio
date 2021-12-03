import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from "react-redux";
import {videoR} from '../store/action';

export default function SingleVideo() {

    const params = useParams()
    const dispatch = useDispatch()
    const video = useSelector(state => state.video)

    const [selected, setSelected] = useState(0)

    const select = (e) => {
        setSelected(e.target.value)
    }

    let x = video[selected]

    useEffect(() => {
       dispatch(videoR(params.id))
    }, []);

    return (
        <div className="card video">
            {
                x ?
                <video key={x.link} controls>
                  <source src={x.link} />
                </video> : null
            } 
            <select onChange={select} value={selected} class="form-select" aria-label="Default select example">
                
                {
                    video.map((video,i)=>(
                        <option value={i}>{video.height}</option>
                    ))
                }
                
            </select>
        </div>
    )
}
