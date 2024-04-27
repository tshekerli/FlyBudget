import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Logo from "../img/logo.jpg"
import { motion } from "framer-motion";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <motion.button whileTap={{scale:0.85}} style={{borderRadius:"50%", justifyContent:'center', alignItems:'center', border:'none'}}><Link  style={{textDecoration:'none', color:"#747474"}} to="/"><img src={Logo} alt="" /></Link></motion.button>
          
        </li>
        <li>
          
          <Link  style={{textDecoration:'none', color:"#747474"}}  to="/"><motion.button  className='navlink' whileTap={{scale:0.85}} style={{border:'none', background:'none'}} >Home</motion.button> </Link>
        </li>
        
        

        <li>
          <Link style={{textDecoration:'none', color:"#747474"}} to="/about">
            <motion.button className='navlink' whileTap={{scale:0.85}} style={{border:'none', background:'none'}}>About </motion.button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;


