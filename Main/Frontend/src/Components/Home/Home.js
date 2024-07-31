import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-bootstrap-icons';
const homepic1 = require('./homepic1.jpeg')
const homepic2 = require('./homepic2.jpeg')
const homepic3 = require('./homepic3.jpeg')
const homepic4 = require('./homepic4.jpeg')
const homepic5 = require('./homepic5.jpeg')
const homepic6 = require('./homepic6.jpeg')
const homepic7 = require('./homepic7.jpeg')

export default function Home() {
  const [pdfs, setPdfs] = useState([]);
  function navcheck() {
    if (window.location.pathname === "/") {
      document.getElementById('home').style.backgroundColor = "grey"
      document.getElementById('home').style.color = "white"
      document.getElementById("courses").style.backgroundColor = ""
      document.getElementById('courses').style.color = ""
      document.getElementById("department").style.backgroundColor = ""
      document.getElementById('department').style.color = ""
      document.getElementById("login/signup").style.backgroundColor = ""
      document.getElementById('login/signup').style.color = ""
      document.getElementById("training").style.backgroundColor = ""
      document.getElementById('training').style.color = ""
      document.getElementById("user").style.backgroundColor = ""
      document.getElementById('user').style.color = ""
    }
    else if (window.location.pathname === "/courses") {
      document.getElementById('home').style.backgroundColor = ""
      document.getElementById('home').style.color = ""
      document.getElementById("courses").style.backgroundColor = "grey"
      document.getElementById('courses').style.color = "white"
      document.getElementById("department").style.backgroundColor = ""
      document.getElementById('department').style.color = ""
      document.getElementById("login/signup").style.backgroundColor = ""
      document.getElementById('login/signup').style.color = ""
      document.getElementById("training").style.backgroundColor = ""
      document.getElementById('training').style.color = ""
      document.getElementById("user").style.backgroundColor = ""
      document.getElementById('user').style.color = ""
    }
    else if (window.location.pathname === "/department") {
      document.getElementById('home').style.backgroundColor = ""
      document.getElementById('home').style.color = ""
      document.getElementById("courses").style.backgroundColor = ""
      document.getElementById('courses').style.color = ""
      document.getElementById("department").style.backgroundColor = "grey"
      document.getElementById('department').style.color = "white"
      document.getElementById("login/signup").style.backgroundColor = ""
      document.getElementById('login/signup').style.color = ""
      document.getElementById("training").style.backgroundColor = ""
      document.getElementById('training').style.color = ""
      document.getElementById("user").style.backgroundColor = ""
      document.getElementById('user').style.color = ""
    }
    else if (window.location.pathname === "/adminlogin") {
      document.getElementById('home').style.backgroundColor = ""
      document.getElementById('home').style.color = ""
      document.getElementById("courses").style.backgroundColor = ""
      document.getElementById('courses').style.color = ""
      document.getElementById("department").style.backgroundColor = ""
      document.getElementById('department').style.color = ""
      document.getElementById("login/signup").style.backgroundColor = "grey"
      document.getElementById('login/signup').style.color = "white"
      document.getElementById("training").style.backgroundColor = ""
      document.getElementById('training').style.color = ""
      document.getElementById("user").style.backgroundColor = ""
      document.getElementById('user').style.color = ""
    }
    else if (window.location.pathname === "/training") {
      document.getElementById('home').style.backgroundColor = ""
      document.getElementById('home').style.color = ""
      document.getElementById("courses").style.backgroundColor = ""
      document.getElementById('courses').style.color = ""
      document.getElementById("department").style.backgroundColor = ""
      document.getElementById('department').style.color = ""
      document.getElementById("login/signup").style.backgroundColor = ""
      document.getElementById('login/signup').style.color = ""
      document.getElementById("training").style.backgroundColor = "grey"
      document.getElementById('training').style.color = "white"
      document.getElementById("user").style.backgroundColor = ""
      document.getElementById('user').style.color = ""
    }
    else if (window.location.pathname === "/user") {
      document.getElementById('home').style.backgroundColor = ""
      document.getElementById('home').style.color = ""
      document.getElementById("courses").style.backgroundColor = ""
      document.getElementById('courses').style.color = ""
      document.getElementById("department").style.backgroundColor = ""
      document.getElementById('department').style.color = ""
      document.getElementById("login/signup").style.backgroundColor = ""
      document.getElementById('login/signup').style.color = ""
      document.getElementById("training").style.backgroundColor = ""
      document.getElementById('training').style.color = ""
      document.getElementById("user").style.backgroundColor = "grey"
      document.getElementById('user').style.color = "white"
    }
  }
  useEffect(() => {
    axios.get('https://college-erp-system-updated.vercel.app/download-notice')
    .then(response => {
        setPdfs(response.data);
        console.log(pdfs)
    })
    .catch(error => {
        console.log('Error fetching the PDF list', error);
    });
    navcheck();
  }, [])

 async function test(){
    text = document.getElementById("testSend").value;

await axios.post("https://college-erp-system-updated.vercel.app/login",{
              text
          })
          .then(res=>{
               alert(res.data)
          }).catch(e=>{
            alert("no data received in backend")
            console.log(e);
        })
    
  }
  
  return (
    <div>
      <section id='homesec1'>
       <input type="text" id="testSend">
       <button onclick="test()">Test<button>
        <h1 id='collegeheading'>ERP System For College</h1>
        <div className='homesec1-div1'>
          <div className='homesec1-div2'>
            <Carousel id='img-slider-system'>
              <Carousel.Item>
                <img src={homepic1} alt='img1' className='slide-images'></img>
              </Carousel.Item>
              <Carousel.Item>
                <img src={homepic2} alt='img2' className='slide-images'></img>
              </Carousel.Item>
              <Carousel.Item>
                <img src={homepic3} alt='img3' className='slide-images'></img>
              </Carousel.Item>
              <Carousel.Item>
                <img src={homepic4} alt='img4' className='slide-images'></img>
              </Carousel.Item>
              <Carousel.Item>
                <img src={homepic5} alt='img5' className='slide-images'></img>
              </Carousel.Item>
              <Carousel.Item>
                <img src={homepic6} alt='img6' className='slide-images'></img>
              </Carousel.Item>
              <Carousel.Item>
                <img src={homepic7} alt='img7' className='slide-images'></img>
              </Carousel.Item>
            </Carousel>
          
          <div className='notice'>
          <h5>Notices <p id='notice-btn1' onClick={()=>{
            document.querySelector(".noticeboard").style.display="inline"
            document.querySelector("#notice-btn1").style.display="none"
            document.querySelector("#notice-btn2").style.display="flex"
          }}>&#11167;</p> <p id='notice-btn2' onClick={()=>{
            document.querySelector(".noticeboard").style.display="none"
            document.querySelector("#notice-btn2").style.display="none"
            document.querySelector("#notice-btn1").style.display="flex"
          }}> &#11205;</p></h5>
          <div className='noticeboard'>
                {pdfs.map((pdf, index) => (
                    <p key={index}>
                        <a href={`https://college-erp-system-updated.vercel.app/download-notice/${pdf}`} download>{pdf}</a>
                    </p>
                ))}
          </div>
          </div>
          </div>

          <div className='homesec1-div3'>
            <h2>Learn The Best</h2>
            <p>Welcome to our esteemed institution, a beacon of excellence in higher education. At our college,
              we pride ourselves on offering world-class courses in BCA(Bachelor of Computer Applications),
              BBA (Bachelor of Business Administration) and B Tech(Bachelor of Technology). Our commitment to academic rigor and holistic development
              ensures that our students are equipped with the skills and knowledge needed to thrive in today's
              dynamic global landscape. With state-of-the-art facilities, dedicated faculty, and a vibrant campus
              community, we nurture future leaders and innovators. Join us at our college and embark on a journey
              towards a successful and fulfilling career.</p>
          </div>
        </div>

      </section>
    </div>
  )

}
