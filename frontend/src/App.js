import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";
import { SearchUi } from "./components/SearchUi.jsx";
import Home from "./pages/home";

import About from "./pages/about";

import NotFoundPage from "./pages/404";
import Loader from "./components/loader"

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}

      {/* <SearchUi/> */}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* <Loader/> */}


    </div>
  );
}

export default App;
