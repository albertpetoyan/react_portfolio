import "./App.css"
import React from 'react'
import Form from "./components/Form"
import ToDoList from "./components/ToDoList"
import _ from 'lodash'
import Footer from "./components/Footer"


export default function App() {
  return (
    <div className="container">
      <Form/>
      <ToDoList/> 
      <Footer/>
    </div>
  )
}

