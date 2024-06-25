import React, {useEffect} from 'react'
import "./Department.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate } from 'react-router-dom';


const bca = require("./bca-dep.jpeg")
const bba = require("./bba-dep.jpeg")
const cse = require("./cse-dep.jpeg")
const ece = require("./ece-dep.jpeg")
const me = require("./me-dep.jpeg")
const ee = require("./ee-dep.jpeg")
const ce = require("./ce-dep.jpeg")

export default function Department() {
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
      <section id='dep-item'>
      <h2>Departments</h2>
        <p className='dep-summary1'>
          Our college offers diverse departments for varied academic interests:
          <br></br><br></br>
          <ul>
            <li>BCA: Develops strong programming skills for IT careers.</li>
            <li>BBA: Prepares future business leaders in management, finance, and marketing.</li>
             B.Tech: Encompasses specialized branches:
             <br></br>
            <li>CSE: Focuses on cutting-edge technologies and data science.</li>
            <li>ECE: Emphasizes electronic and communication systems.</li>
            <li>ME: Combines academics with hands-on mechanical engineering.</li>
            <li>EE: Specializes in electrical systems and renewable energy.</li>
            <li>CE: Focuses on infrastructure and sustainable practices.</li>
          </ul>
          Join us to excel in knowledge, innovation, and leadership across these fields.
        </p>
        <hr></hr>
        <div id='dep'>
         {/*BCA*/}
        <div className='bca-dep'>
          <h5>BCA<p className='bca-p1' onClick={() => {
            document.querySelector(".bca-dep-card").style.display = "flex"
            document.querySelector(".bca-dep h5 .bca-p1").style.display = "none"
            document.querySelector(".bca-dep h5 .bca-p2").style.display = "flex"
          }}>&#11167;</p>  <p className='bca-p2' onClick={() => {
            document.querySelector(".bca-dep-card").style.display = "none"
            document.querySelector(".bca-dep h5 .bca-p1").style.display = "flex"
            document.querySelector(".bca-dep h5 .bca-p2").style.display = "none"
          }}> &#11205;</p></h5>
          <Card style={{ width: '18rem' }} className='bca-dep-card'>
            <Card.Img variant="top" src={bca} />
            <Card.Body>
              <Card.Title>BCA</Card.Title>
              <Card.Text id="bca-short">
                BCA (Bachelor of Computer Applications) is a three-year undergraduate program that
                focuses on computer science and applications.
                <p onClick={() => {
                  document.querySelector("#bca-short").style.display = "none"
                  document.querySelector("#bca-long").style.display = "inline"
                }}>View More..</p>
              </Card.Text>
              <Card.Text id="bca-long">
                BCA (Bachelor of Computer Applications) is a three-year undergraduate program that focuses
                on computer science and applications. It covers areas like programming languages, database
                management, software engineering, web development, and networking. BCA students gain
                practical skills in coding, software development, and system analysis, preparing
                them for careers in IT, software development, consulting, and related fields. <p onClick={() => {
                  document.querySelector("#bca-short").style.display = "inline"
                  document.querySelector("#bca-long").style.display = "none"
                }}>View Less</p>
              </Card.Text>
              <Button variant="primary" id='cardbca'  onClick={ function(){navigate('/studentsignup')}} >Admission</Button>
            </Card.Body>
          </Card>
        </div>

        {/*BBA*/}
        <div className='bba-dep'>
          <h5>BBA<p className='bba-p1' onClick={() => {
            document.querySelector(".bba-dep-card").style.display = "flex"
            document.querySelector(".bba-dep h5 .bba-p1").style.display = "none"
            document.querySelector(".bba-dep h5 .bba-p2").style.display = "flex"
          }}>&#11167;</p>  <p className='bba-p2' onClick={() => {
            document.querySelector(".bba-dep-card").style.display = "none"
            document.querySelector(".bba-dep h5 .bba-p1").style.display = "flex"
            document.querySelector(".bba-dep h5 .bba-p2").style.display = "none"
          }}> &#11205;</p></h5>
          <Card style={{ width: '18rem' }} className='bba-dep-card'>
            <Card.Img variant="top" src={bba} />
            <Card.Body>
              <Card.Title>BBA</Card.Title>
              <Card.Text id="bba-short">
                BBA (Bachelor of Business Administration) is
                a three-year undergraduate program that provides a
                foundation in business management principles.
                <p onClick={() => {
                  document.querySelector("#bba-short").style.display = "none"
                  document.querySelector("#bba-long").style.display = "inline"
                }}>View More..</p>
              </Card.Text>
              <Card.Text id="bba-long">
                BBA (Bachelor of Business Administration) is a three-year undergraduate program that provides
                a foundation in business management principles. It covers areas such as accounting, finance,
                marketing, human resources, and operations management. BBA students learn about business
                strategies, decision-making processes, and organizational
                structures, preparing them for careers in business, entrepreneurship, consulting, and related
                fields. <p onClick={() => {
                  document.querySelector("#bba-short").style.display = "inline"
                  document.querySelector("#bba-long").style.display = "none"
                }}>View Less</p>
              </Card.Text>
              <Button variant="primary" id='cardbba'  onClick={ function(){navigate('/studentsignup')}} >Admission</Button>
            </Card.Body>
          </Card>
        </div>


        {/*B.Tech*/}
        <div className='btech-dep'>
          <h5>B.Tech<p className='btech-p1' onClick={() => {
            document.querySelector(".btech-dep h5 .btech-p1").style.display = "none"
            document.querySelector(".btech-dep h5 .btech-p2").style.display = "flex"
            document.querySelector(".cse-dep").style.display = "grid"
            document.querySelector(".ece-dep").style.display = "grid"
            document.querySelector(".me-dep").style.display = "grid"
            document.querySelector(".ee-dep").style.display = "grid"
            document.querySelector(".ce-dep").style.display = "grid"
          }}>&#11167;</p>  <p className='btech-p2' onClick={() => {
            document.querySelector(".btech-dep h5 .btech-p1").style.display = "flex"
            document.querySelector(".btech-dep h5 .btech-p2").style.display = "none"
            document.querySelector(".cse-dep").style.display = "none"
            document.querySelector(".ece-dep").style.display = "none"
            document.querySelector(".me-dep").style.display = "none"
            document.querySelector(".ee-dep").style.display = "none"
            document.querySelector(".ce-dep").style.display = "none"
          }}> &#11205;</p></h5>

          {/*CSE*/}
          <div className='cse-dep'>
            <h5>CSE<p className='cse-p1' onClick={() => {
              document.querySelector(".cse-dep-card").style.display = "flex"
              document.querySelector(".cse-dep h5 .cse-p1").style.display = "none"
              document.querySelector(".cse-dep h5 .cse-p2").style.display = "flex"
            }}>&#11167;</p>  <p className='cse-p2' onClick={() => {
              document.querySelector(".cse-dep-card").style.display = "none"
              document.querySelector(".cse-dep h5 .cse-p1").style.display = "flex"
              document.querySelector(".cse-dep h5 .cse-p2").style.display = "none"
            }}> &#11205;</p></h5>
            <Card style={{ width: '18rem' }} className='cse-dep-card'>
              <Card.Img variant="top" src={cse} />
              <Card.Body>
                <Card.Title>CSE</Card.Title>
                <Card.Text id="cse-short">
                  Computer Science and Engineering (CSE) is an interdisciplinary
                  field that combines computer science and electrical engineering
                  principles
                  <p onClick={() => {
                    document.querySelector("#cse-short").style.display = "none"
                    document.querySelector("#cse-long").style.display = "inline"
                  }}>View More..</p>
                </Card.Text>
                <Card.Text id="cse-long">
                  Computer Science and Engineering (CSE) is an interdisciplinary field
                  that combines computer science and electrical engineering principles
                  to study, design, and develop computer systems, software, and hardware
                  . Key areas include software development, algorithms, computer
                  architecture, networking, artificial intelligence, cybersecurity,
                  embedded systems, and databases. CSE professionals work across
                  diverse sectors such as technology, finance, healthcare, and
                  entertainment, driving innovation and solving complex problems. <p onClick={() => {
                    document.querySelector("#cse-short").style.display = "inline"
                    document.querySelector("#cse-long").style.display = "none"
                  }}>View Less</p>
                </Card.Text>
                <Button variant="primary" id='cardcse'  onClick={ function(){navigate('/studentsignup')}} >Admission</Button>
              </Card.Body>
            </Card>
          </div>

          {/*ECE*/}
          <div className='ece-dep'>
            <h5>ECE<p className='ece-p1' onClick={() => {
              document.querySelector(".ece-dep h5 .ece-p1").style.display = "none"
              document.querySelector(".ece-dep h5 .ece-p2").style.display = "flex"
              document.querySelector(".ece-dep-card").style.display = "grid"
            }}>&#11167;</p>  <p className='ece-p2' onClick={() => {
              document.querySelector(".ece-dep h5 .ece-p1").style.display = "flex"
              document.querySelector(".ece-dep h5 .ece-p2").style.display = "none"
              document.querySelector(".ece-dep-card").style.display = "none"
            }}> &#11205;</p></h5>
            <Card style={{ width: '18rem' }} className='ece-dep-card'>
              <Card.Img variant="top" src={ece} />
              <Card.Body>
                <Card.Title>CSE</Card.Title>
                <Card.Text id="ece-short">
                  Electronics and Communication Engineering focuses on designing,
                  developing, and testing electronic devices and systems.
                  <p onClick={() => {
                    document.querySelector("#ece-short").style.display = "none"
                    document.querySelector("#ece-long").style.display = "inline"
                  }}>View More..</p>
                </Card.Text>
                <Card.Text id="ece-long">
                  Electronics and Communication Engineering focuses on designing, developing, and testing electronic
                  devices and systems. It encompasses areas like semiconductor devices,
                  integrated circuits, embedded systems, and communication technologies.
                  Electronics engineers work in industries such as consumer electronics,
                  telecommunications, automotive, and automation, contributing to advancements
                  in technology and the creation of devices and systems that enhance daily life.
                  them for careers in IT, software development, consulting, and related fields. <p onClick={() => {
                    document.querySelector("#ece-short").style.display = "inline"
                    document.querySelector("#ece-long").style.display = "none"
                  }}>View Less</p>
                </Card.Text>
                <Button variant="primary" id='cardece'  onClick={ function(){navigate('/studentsignup')}} >Admission</Button>
              </Card.Body>
            </Card>
          </div>

          {/*ME*/}
          <div className='me-dep'>
            <h5>ME<p className='me-p1' onClick={() => {
              document.querySelector(".me-dep h5 .me-p1").style.display = "none"
              document.querySelector(".me-dep h5 .me-p2").style.display = "flex"
              document.querySelector(".me-dep-card").style.display = "grid"
            }}>&#11167;</p>  <p className='me-p2' onClick={() => {
              document.querySelector(".me-dep h5 .me-p1").style.display = "flex"
              document.querySelector(".me-dep h5 .me-p2").style.display = "none"
              document.querySelector(".me-dep-card").style.display = "none"
            }}> &#11205;</p></h5>
            <Card style={{ width: '18rem' }} className='me-dep-card'>
              <Card.Img variant="top" src={me} />
              <Card.Body>
                <Card.Title>ME</Card.Title>
                <Card.Text id="me-short">
                  Mechanical Engineering involves the design, analysis,
                  and manufacturing of mechanical systems
                  <p onClick={() => {
                    document.querySelector("#me-short").style.display = "none"
                    document.querySelector("#me-long").style.display = "inline"
                  }}>View More..</p>
                </Card.Text>
                <Card.Text id="me-long">
                  Mechanical Engineering involves the design, analysis, and
                  manufacturing of mechanical systems. It covers areas such as
                  thermodynamics, fluid mechanics, materials science, and
                  structural analysis. Mechanical engineers work in industries
                  like automotive, aerospace, energy, and manufacturing,
                  contributing to the development and improvement of machines,
                  engines, and other mechanical devices. <p onClick={() => {
                    document.querySelector("#me-short").style.display = "inline"
                    document.querySelector("#me-long").style.display = "none"
                  }}>View Less</p>
                </Card.Text>
                <Button variant="primary" id='cardme'  onClick={ function(){navigate('/studentsignup')}} >Admission</Button>
              </Card.Body>
            </Card>
          </div>

          {/*EE*/}
          <div className='ee-dep'>
            <h5>EE<p className='ee-p1' onClick={() => {
              document.querySelector(".ee-dep-card").style.display = "flex"
              document.querySelector(".ee-dep h5 .ee-p1").style.display = "none"
              document.querySelector(".ee-dep h5 .ee-p2").style.display = "flex"
            }}>&#11167;</p>  <p className='ee-p2' onClick={() => {
              document.querySelector(".ee-dep-card").style.display = "none"
              document.querySelector(".ee-dep h5 .ee-p1").style.display = "flex"
              document.querySelector(".ee-dep h5 .ee-p2").style.display = "none"
            }}> &#11205;</p></h5>
            <Card style={{ width: '18rem' }} className='ee-dep-card'>
              <Card.Img variant="top" src={ee} />
              <Card.Body>
                <Card.Title>EE</Card.Title>
                <Card.Text id="ee-short">
                  Electrical Engineering focuses on the study and application of
                  electricity, electronics, and electromagnetism.
                  <p onClick={() => {
                    document.querySelector("#ee-short").style.display = "none"
                    document.querySelector("#ee-long").style.display = "inline"
                  }}>View More..</p>
                </Card.Text>
                <Card.Text id="ee-long">
                  Electrical Engineering focuses on the study and application of electricity,
                  electronics, and electromagnetism. It involves designing and maintaining
                  electrical systems and components in areas such as circuit theory, power
                  systems, control systems, communications, signal processing, and embedded
                  systems. Electrical engineers work in diverse industries including energy,
                  telecommunications, and electronics, driving technological innovation and
                  infrastructure development. <p onClick={() => {
                    document.querySelector("#ee-short").style.display = "inline"
                    document.querySelector("#ee-long").style.display = "none"
                  }}>View Less</p>
                </Card.Text>
                <Button variant="primary" id='cardee'  onClick={ function(){navigate('/studentsignup')}} >Admission</Button>
              </Card.Body>
            </Card>
          </div>

          {/*CE*/}
          <div className='ce-dep'>
            <h5>CE<p className='ce-p1' onClick={() => {
              document.querySelector(".ce-dep-card").style.display = "flex"
              document.querySelector(".ce-dep h5 .ce-p1").style.display = "none"
              document.querySelector(".ce-dep h5 .ce-p2").style.display = "flex"
            }}>&#11167;</p>  <p className='ce-p2' onClick={() => {
              document.querySelector(".ce-dep-card").style.display = "none"
              document.querySelector(".ce-dep h5 .ce-p1").style.display = "flex"
              document.querySelector(".ce-dep h5 .ce-p2").style.display = "none"
            }}> &#11205;</p></h5>
            <Card style={{ width: '18rem' }} className='ce-dep-card'>
              <Card.Img variant="top" src={ce} />
              <Card.Body>
                <Card.Title>CE</Card.Title>
                <Card.Text id="ce-short">
                  Civil Engineering is a discipline that encompasses the planning,
                  design, construction, and maintenance of physical infrastructure
                  essential for society's functioning.
                  <p onClick={() => {
                    document.querySelector("#ce-short").style.display = "none"
                    document.querySelector("#ce-long").style.display = "inline"
                  }}>View More..</p>
                </Card.Text>
                <Card.Text id="ce-long">
                  Civil Engineering is a discipline that encompasses the planning,
                  design, construction, and maintenance of physical infrastructure
                  essential for society's functioning. It includes areas such as structural
                  engineering, geotechnics, transportation engineering, environmental
                  engineering, and water resources management. Civil engineers play
                  a crucial role in creating and maintaining structures like buildings,
                  bridges, dams, roads, and water supply systems, ensuring they meet safety
                  standards, are environmentally sustainable, and contribute positively to
                  communities' quality of life and economic development. <p onClick={() => {
                    document.querySelector("#ce-short").style.display = "inline"
                    document.querySelector("#ce-long").style.display = "none"
                  }}>View Less</p>
                </Card.Text>
                <Button variant="primary" id='cardce'  onClick={ function(){navigate('/studentsignup')}} >Admission</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
        </div>
        <p className='dep-summary2'>Education is the passport to the future, for tomorrow belongs to those 
          who prepare for it today. Embrace every challenge as an opportunity to grow, and remember that 
          learning is a lifelong journey. In college, you are not just earning a degree but also shaping your 
          mind and character for the endless possibilities ahead.</p>
      </section>

    </div>
  )
}
