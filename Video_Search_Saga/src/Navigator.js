import {Route, Routes, useLocation } from "react-router-dom";
import React from 'react';
import Home from "./components/Home";
import SingleVideo from "./components/SingleVideo";


const Navigator = () => {
const location = useLocation();

    return (
        <Routes location={location}>
            <Route path="/" element={<Home/>}/>
            <Route path="video/:id" element={<SingleVideo/>}/>
        </Routes>
    );
}

export default Navigator;