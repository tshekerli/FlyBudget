import React, { useState } from 'react';
import { SearchUi } from './components/SearchUi';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home"
import Search from "./pages/search"
import About from "./pages/about"



function App() {
  
  
 
  return (
    
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/search' element = {<Search/>}/>
        <Route path='/about' element = {<About/>}/>
      </Routes>
      </BrowserRouter>
      <SearchUi/>
    </div>
  )
}

export default App;