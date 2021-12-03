import React from 'react'
import { useNavigate } from 'react-router'


export default function ContentItem(props) {
    const {item} = props
    const navigate = useNavigate()
    
    const singleVideo = () => {
        navigate(`/video/${item.id}`)
      }

    return (
        <div className="card col-2 img__block" onClick={singleVideo}>
          <img src={item.image} className="card-img-top" alt="..."/>
        </div>
    )
}
