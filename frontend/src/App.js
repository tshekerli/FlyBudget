import React, { useState } from 'react';
import { SearchUi } from './components/SearchUi';
import ReactDOM from "react-dom/client";
import {  Routes, Route } from "react-router-dom";
import Home from "./pages/home"
import Search from "./pages/search"
import About from "./pages/about"
import Navbar from './components/navbar';



function App() {
  
  
 
  return (
    
    <div className="App">
      
      
      
      {/* <SearchUi/> */}

      <Navbar/>

      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/search' element = {<Search/>}/>
        <Route path='/about' element = {<About/>}/>
      </Routes>


    </div>
  )
}

export default App;