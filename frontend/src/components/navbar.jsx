import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Logo from "../img/logo.jpg"
function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <img src={Logo} alt="" />
        </li>
        <li>
          <Link  style={{textDecoration:'none', color:"#747474"}} to="/">Home</Link>
        </li>
        
        <li>
          <Link style={{textDecoration:'none', color:"#747474"}} to="/search">Search</Link>
        </li>

        <li>
          <Link style={{textDecoration:'none', color:"#747474"}} to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;


