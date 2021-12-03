import React from 'react'
import ContentBody from './ContentBody'
import Search from './Search'

export default function Home() {
    return (
        <div className="container">
          <Search/>
          <ContentBody/>
        </div>
    )
}
