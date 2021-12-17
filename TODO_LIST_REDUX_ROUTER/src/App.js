import "./assets/css/App.scss"
import React from 'react'
import { BrowserRouter} from "react-router-dom";
import Navigator from "./components/Navigator";



export default function App() {
  return (
      <BrowserRouter>
        <Navigator/>
      </BrowserRouter>
  )
}

