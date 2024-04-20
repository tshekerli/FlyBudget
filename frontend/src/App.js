import React, { useState } from 'react';
import { SearchUi } from './components/SearchUi';
import ReactDOM from "react-dom/client";
import {  Routes, Route } from "react-router-dom";
import Home from "./pages/home"
import Search from "./pages/search"
import About from "./pages/about"
import Navbar from './components/navbar';
import NotFoundPage from './pages/404';



function App() {
  
  
 
  return (
    
    <div className="App">
      
      {/* <Navbar/> */}
      
      {/* <SearchUi/> */}

      

      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/search' element = {<Search/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path="*" element = {<NotFoundPage/>} />
      </Routes>

      


    </div>
  )
}

export default App;