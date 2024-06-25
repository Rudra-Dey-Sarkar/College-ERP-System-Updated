import React, {useEffect} from 'react'
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  let f = 0;
  
  function hamburger() {

    if (f === 0) {
      document.querySelector('nav').style.display = "grid";
      f = 1;
    }
    else {
      document.querySelector('nav').style.display = "none";
      f = 0;
    }

  }

  return (
    <div >
      <div className='navclass'>

        <div className="navbtn" onClick={hamburger}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>

        <nav>
          <Link className='link' id='home' to="/" >Home</Link>
          <Link className='link' id='courses' to="/courses" >Courses</Link>
          <Link className='link' id='department' to="/department" >Department</Link>
          <Link className='link' id='training' to="/training">Training & placement</Link>
          <Link className='link'  to="/adminlogin" id="login/signup">Login/SignUp</Link>
          <Link className='link'  to="/user" id="user">User</Link>
        </nav>
      </div>
    </div>
  )
}

export default Navbar 