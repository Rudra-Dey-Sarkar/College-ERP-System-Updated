import React, { useEffect } from 'react'
import "./Courses.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate } from 'react-router-dom';
const a = require('./bcacard.jpeg');
const b = require('./bbacard.jpeg');
const c= require('./btech.jpeg');

function Courses() {
    const navigate = useNavigate();
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
            <section id='course'>

                <h2 className='courseheading'>Courses We Provide</h2>

                <p className='coursesummary'>Experience excellence in technology and business education at our college.
                    Our BCA and BBA programs combine rigorous academics with practical learning, preparing students for
                    successful careers. With dedicated faculty and industry partnerships, we offer a dynamic environment where
                    students gain the skills and knowledge needed to excel in the modern workforce.
                    Join us to unleash your potential and embark on a journey of growth and success.</p>


                <div className='cards'>
                    <Card style={{ width: '18rem' }} className='bcacard'>
                        <Card.Img variant="top" src={a} />
                        <Card.Body>
                            <Card.Title>BCA</Card.Title>
                            <Card.Text>
                            Learn and build career in Information and technology, get admission in BCA (Bachelor of Computer Applications).
                            </Card.Text>
                            <Button variant="primary" id='cardbca'  onClick={ function(){navigate('/studentsignup')}}>Admission</Button>
                        </Card.Body>
                    </Card>



                    <Card style={{ width: '18rem' }} className='bbacard'>
                        <Card.Img variant="top" src={b} />
                        <Card.Body>
                            <Card.Title>BBA</Card.Title>
                            <Card.Text>
                            Learn and build career in Business Administration, get admission in BBA (Bachelor of Computer Administration).
                            </Card.Text>
                            <Button variant="primary" id='cardbca'  onClick={ function(){navigate('/studentsignup')}} >Admission</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }} className='btechcard'>
                        <Card.Img variant="top" src={c} />
                        <Card.Body>
                            <Card.Title>B.Tech</Card.Title>
                            <Card.Text>
                            Learn and build career in Bachelor of Technology, get admission in B.Tech (Bachelor of Technology).
                            </Card.Text>
                            <Button variant="primary" id='cardbca'  onClick={ function(){navigate('/studentsignup')}} >Admission</Button>
                        </Card.Body>
                    </Card>
                </div>


            </section>


            <section id='bca'>

                <h3 className='bcaheading'><u>BCA (Bachelor of Computer Applications)</u></h3>
                <p className='bcasummary'>Welcome to our college, a premier institution offering the Bachelor of Computer Applications (BCA) program. With a strong emphasis on practical learning and industry relevance, our BCA curriculum is designed to equip students with a comprehensive understanding of computer science and its applications in the real world.

                    Our experienced faculty members bring a wealth of knowledge and expertise to the classroom, guiding students through hands-on projects, case studies, and internships to ensure they develop the necessary skills for success in today's technology-driven landscape.

                    In addition to technical proficiency, we prioritize the development of critical thinking, problem-solving abilities, and effective communication skills among our students. Through a blend of academic rigor and holistic development, we strive to produce well-rounded graduates who are ready to tackle the challenges of the digital age.

                    Furthermore, our college fosters a vibrant learning community where students can collaborate, innovate, and network with industry professionals. We regularly organize seminars, workshops, and guest lectures featuring prominent experts from the field, providing valuable insights and opportunities for personal and professional growth.

                    Whether you aspire to become a software developer, systems analyst, or IT consultant, our BCA program will provide you with the knowledge, skills, and confidence to pursue a rewarding career in the dynamic field of computer science. Join us and embark on a journey of academic excellence and future success.</p>
            </section>

            <section id='bba'>

                <h3 className='bbaheading'><u>BBA (Bachelor of Computer Administration)</u></h3>
                <p className='bbasummary'>Welcome to our esteemed college, dedicated to fostering business leaders through our Bachelor of Business Administration (BBA) program. With a focus on practical learning and industry relevance, our BBA curriculum is designed to equip students with the knowledge and skills needed to excel in the competitive world of business.

                    Our experienced faculty members, drawn from diverse backgrounds in academia and industry, provide invaluable insights and mentorship to our students. Through a combination of case studies, group projects, and internships, we ensure that our graduates are well-prepared to tackle real-world challenges and make meaningful contributions to the business community.

                    In addition to academic excellence, we prioritize the holistic development of our students, fostering qualities such as leadership, teamwork, and ethical decision-making. Our college provides a supportive and inclusive learning environment where students can explore their passions, build professional networks, and grow as individuals.

                    Furthermore, we offer numerous opportunities for experiential learning and professional development, including internships, industry visits, and guest lectures by prominent business leaders. These experiences not only enhance our students' understanding of key business concepts but also help them develop valuable connections and insights into various industries.

                    Whether you aspire to start your own business, climb the corporate ladder, or pursue further studies in business administration, our BBA program will provide you with the foundation and resources needed to achieve your goals. Join us and embark on a transformative educational journey towards a successful career in business.</p>
            </section>

            <section id='btech'>

<h3 className='btechheading'><u>B.Tech (Bachelor of Technology)</u></h3>
<p className='btechsummary'>Welcome to our college, a premier institution offering the
     Bachelor of Technology (B.Tech) program. With a strong emphasis on practical learning and industry relevance,
      our B.Tech curriculum is designed to equip students with a comprehensive understanding of engineering 
      principles and their applications in the real world. Our experienced faculty members bring a wealth of 
      knowledge and expertise to the classroom, guiding students through hands-on projects, case studies, and 
      internships to ensure they develop the necessary skills for success in today's technology-driven landscape.
       In addition to technical proficiency, we prioritize the development of critical thinking, problem-solving
        abilities, and effective communication skills among our students. Through a blend of academic rigor and 
        holistic development, we strive to produce well-rounded graduates who are ready to tackle the challenges 
        of the modern engineering world. Furthermore, our college fosters a vibrant learning community where 
        students can collaborate, innovate, and network with industry professionals. We regularly organize 
        seminars, workshops, and guest lectures featuring prominent experts from the field, providing valuable 
        insights and opportunities for personal and professional growth. Whether you aspire to become a civil 
        engineer, mechanical engineer, or software engineer, our B.Tech program will provide you with the
         knowledge, skills, and confidence to pursue a rewarding career in the dynamic field of engineering.
          Join us and embark on a journey of academic excellence and future success.</p>
</section>
        </div>
    )
}

export default Courses