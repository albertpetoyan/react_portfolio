import React from 'react'
import {Route, Routes, useLocation } from "react-router-dom";
import Edit from '../pages/Edit';
import Home from '../pages/Home';


function Navigator() {
    const location = useLocation();
    return (
          <Routes location={location}>
              <Route path='/' element={<Home />}/>
              <Route path='/edit/:id' element={<Edit />}/>
          </Routes>
    )
  }
  
  export default Navigator;
