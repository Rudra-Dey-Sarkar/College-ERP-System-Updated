import React from 'react'
import "./Header.css";
import { TypeAnimation } from 'react-type-animation';
const logo=require('./collegelogo.png')
function Header() {
  return (
    <div>
   <header>

   <img src={logo} id='logo'></img>
   <div className='fonts'>
    <h1>
     ERP System For College
    </h1>

    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Learn From Worls Best Faculty',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Work With Most Inovative Minds',
        1000,
        'Change The World With Inovation',
        1000,
        'Become A Leader In Inovation World',
        1000
      ] }
      wrapper="span"
      speed={50}
      style={{ display: 'inline-block' }}
      repeat={Infinity}
    />
   </div>
  </header>
</div>
  )
}

export default Header
