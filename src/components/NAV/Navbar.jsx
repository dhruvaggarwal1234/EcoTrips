import React, { useState } from "react";
import logo from "./Img/logo.png";
import "./Navbar.css";
import Signin from './Model/Signin.jsx'

function Navbar() {
  const [ModalOpen , setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="Navbar">
        <div>
          <img src={logo} alt="" className="logo" draggable="false" />
          <span className="logotext">Travel || Discover || Meet || Repeat</span>
        </div>
        <div className="outerNavlink">
          <div className="NavLink">
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">Packages</a>
            <a href="">Reviews</a>
            <a href="">Contact Us</a>
          </div>
          <button
            className="Login_button"
           onClick={()=> setIsModalOpen(true)}
          >
            LogIn/SignUp
          </button>
        </div>
      </nav>

     {ModalOpen && <Signin OnClose={()=>setIsModalOpen(false)} /> }
    </>
  );
}

export default Navbar;
