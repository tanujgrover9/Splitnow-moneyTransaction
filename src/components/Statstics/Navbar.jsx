import React from "react";
import "./navbar.css";
import logo from '../../assets/logo.png'
import logo2 from '../../assets/text.png'

const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <div >
        <img src={logo}></img>
        <img src={logo2}></img>
        </div>
        <div>
          
          <button>Admin Pannel</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
