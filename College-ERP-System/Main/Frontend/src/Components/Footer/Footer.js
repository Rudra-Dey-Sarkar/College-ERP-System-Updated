import React from 'react'
import "./Footer.css";
import { Link } from 'react-router-dom';
import * as Icons from 'react-bootstrap-icons';
function Footer() {
  return (
    <div> 
    
    <footer>
    <div className='components'>
    <Link to="#" className='about'>About Us</Link>
      <div className='icons'>
    <Link to="#" className='logo'><Icons.Facebook  size={25}></Icons.Facebook></Link> 
    <Link to="#" className='logo'><Icons.Instagram  size={25}></Icons.Instagram></Link> 
    <Link to="#" className='logo'>  <Icons.Twitter  size={25}></Icons.Twitter></Link>
      </div>
      </div>
    
    <p>&#169; 2024 ERP System For College-Group-A. All Right Reserved</p> 
  </footer>
  </div>
  )
}

export default Footer