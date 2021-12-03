import React from 'react'
import { useSelector } from "react-redux";
import ContentItem from './ContentItem';

export default function ContentBody() {

    const data = useSelector(state =>state.data)

    return (
            <div className="container">
              <div className="row">
              { data ?
                data.map(item =>(
                    <ContentItem key={item.id} item={item}/>
                )) : null
              }
              </div>
            </div>
        
    )
}
