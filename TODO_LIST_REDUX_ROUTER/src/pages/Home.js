import React from 'react'
import Footer from '../components/Footer'
import Form from '../components/Form'
import ToDoList from '../components/ToDoList'


export default function Home() {
    return (
        <div className="container">
            <Form/>
            <ToDoList/> 
            <Footer/>
        </div>
    )
}
