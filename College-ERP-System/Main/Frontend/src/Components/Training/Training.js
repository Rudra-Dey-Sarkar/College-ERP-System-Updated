import React, {useEffect} from 'react'
import "./Training.css"
const tppic=require("./tppic.jpeg")

function Training() {
  function navcheck(){
    if(window.location.pathname==="/"){
      document.getElementById('home').style.backgroundColor="grey"
      document.getElementById('home').style.color="white"
     document.getElementById("courses").style.backgroundColor=""
     document.getElementById('courses').style.color=""
      document.getElementById("department").style.backgroundColor=""
      document.getElementById('department').style.color=""
      document.getElementById("login/signup").style.backgroundColor=""
      document.getElementById('login/signup').style.color=""
      document.getElementById("training").style.backgroundColor=""
      document.getElementById('training').style.color=""
      document.getElementById("user").style.backgroundColor=""
      document.getElementById('user').style.color=""
    }
    else if(window.location.pathname==="/courses"){
      document.getElementById('home').style.backgroundColor=""
      document.getElementById('home').style.color=""
     document.getElementById("courses").style.backgroundColor="grey"
     document.getElementById('courses').style.color="white"
      document.getElementById("department").style.backgroundColor=""
      document.getElementById('department').style.color=""
      document.getElementById("login/signup").style.backgroundColor=""
      document.getElementById('login/signup').style.color=""
      document.getElementById("training").style.backgroundColor=""
      document.getElementById('training').style.color=""
      document.getElementById("user").style.backgroundColor=""
      document.getElementById('user').style.color=""
     }
     else if(window.location.pathname==="/department"){
      document.getElementById('home').style.backgroundColor=""
      document.getElementById('home').style.color=""
     document.getElementById("courses").style.backgroundColor=""
     document.getElementById('courses').style.color=""
      document.getElementById("department").style.backgroundColor="grey"
      document.getElementById('department').style.color="white"
      document.getElementById("login/signup").style.backgroundColor=""
      document.getElementById('login/signup').style.color=""
      document.getElementById("training").style.backgroundColor=""
      document.getElementById('training').style.color=""
      document.getElementById("user").style.backgroundColor=""
      document.getElementById('user').style.color=""
       }
       else if(window.location.pathname==="/adminlogin"){
        document.getElementById('home').style.backgroundColor=""
        document.getElementById('home').style.color=""
       document.getElementById("courses").style.backgroundColor=""
       document.getElementById('courses').style.color=""
        document.getElementById("department").style.backgroundColor=""
        document.getElementById('department').style.color=""
        document.getElementById("login/signup").style.backgroundColor="grey"
        document.getElementById('login/signup').style.color="white"
        document.getElementById("training").style.backgroundColor=""
        document.getElementById('training').style.color=""
        document.getElementById("user").style.backgroundColor=""
        document.getElementById('user').style.color=""
       }
       else if(window.location.pathname==="/training"){
        document.getElementById('home').style.backgroundColor=""
        document.getElementById('home').style.color=""
       document.getElementById("courses").style.backgroundColor=""
       document.getElementById('courses').style.color=""
        document.getElementById("department").style.backgroundColor=""
        document.getElementById('department').style.color=""
        document.getElementById("login/signup").style.backgroundColor=""
        document.getElementById('login/signup').style.color=""
        document.getElementById("training").style.backgroundColor="grey"
        document.getElementById('training').style.color="white"
        document.getElementById("user").style.backgroundColor=""
        document.getElementById('user').style.color=""
       }
       else if(window.location.pathname==="/user"){
        document.getElementById('home').style.backgroundColor=""
        document.getElementById('home').style.color=""
       document.getElementById("courses").style.backgroundColor=""
       document.getElementById('courses').style.color=""
        document.getElementById("department").style.backgroundColor=""
        document.getElementById('department').style.color=""
        document.getElementById("login/signup").style.backgroundColor=""
        document.getElementById('login/signup').style.color=""
        document.getElementById("training").style.backgroundColor=""
        document.getElementById('training').style.color=""
        document.getElementById("user").style.backgroundColor="grey"
        document.getElementById('user').style.color="white"
       }
  }
    useEffect(()=>{
   navcheck();  
    },[])
  return (
    <div>
      <section id='tp'>
       <h2>Training and Placements</h2>
       <div className='tp-items'>
       <p>
        Our college excels in providing top-notch training and placement opportunities,
         preparing students for successful careers in leading multinational corporations.
          Through industry-oriented programs, expert faculty, and comprehensive skill development,
           we ensure students are job-ready. Our robust placement cell facilitates connections with 
           top employers, securing high-profile positions for our graduates</p>
       <img src={tppic}></img>
       </div>
      </section>
    </div>
  )
}

export default Training