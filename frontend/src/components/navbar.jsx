import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink, useLocation } from "react-router-dom";
import "./navbar.css";
import Logo from "../img/logo.jpg";
import NotFoundPage from './NotFoundPage'; // import your 404 page

function Navbar() {
  const location = useLocation();

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <img src={Logo} alt="" />
          </li>
          <li>
            <NavLink 
              style={{textDecoration:'none', color:"#747474"}} 
              isActive={() => location.pathname === "/"}
              activeStyle={{pointerEvents: 'none', color: '#747474'}} 
              to="/"
              exact
            >
              Home
            </NavLink>
          </li>
          
          <li>
            <NavLink 
              style={{textDecoration:'none', color:"#747474"}} 
              isActive={() => location.pathname === "/search"}
              activeStyle={{pointerEvents: 'none', color: '#747474'}} 
              to="/search"
            >
              Search
            </NavLink>
          </li>

          <li>
            <NavLink 
              style={{textDecoration:'none', color:"#747474"}} 
              isActive={() => location.pathname === "/about"}
              activeStyle={{pointerEvents: 'none', color: '#747474'}} 
              to="/about"
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default Navbar;