import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios"
import "./User.css"

export default function User() {
  const [pdfs, setPdfs] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');
  const [details, setDetails] = useState([]);
  const [studentdata, setStudentData] = useState([]);
  const [facultydata, setFacultyData] = useState([]);
  const [emaildata, setEmailData] = useState('');

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
    if (location.state === null) {
      setEmail(localStorage.getItem('storeemail'));
      setPassword(localStorage.getItem('storepassword'));
      setUser(localStorage.getItem('storeuser'));
                document.getElementById("login/signup").style.display = "none"
                document.getElementById("user").style.display = "inline"
    } else {
      setEmail(location.state.email);
      setPassword(location.state.password);
      setUser(location.state.user);
                document.getElementById("login/signup").style.display = "none"
                document.getElementById("user").style.display = "inline"
      if (localStorage.length === 0) {
        localStorage.setItem('storeemail', location.state.email);
        localStorage.setItem('storepassword', location.state.password);
        localStorage.setItem('storeuser', location.state.user);
                document.getElementById("login/signup").style.display = "none"
                document.getElementById("user").style.display = "inline"
      }
    }
    navcheck()
  }, [location]);


 useEffect((e)=>{
  try {
    axios.post("http://localhost:5001/getdata", {
      email, password
    }).then(res => {
      setDetails(res.data);
      //for admin
      if (user === "admin") {
        try {
          axios.get("http://localhost:5001/getsfdata", {
          }).then(res => {
            let studentData = [];
            let facultyData = [];
            res.data.forEach(item => {
              if (item.user === "student") {
                studentData.push(item);
              }
              else if (item.user === "faculty") {
                facultyData.push(item);
              }
            });
            setStudentData(studentData);
            setFacultyData(facultyData);
          }).catch(e => {
            console.log(e);
          });
        } catch (e) {
          console.log(e);
        }
      }
      //for student
      else if (user === "student") {
        try {
          axios.get("http://localhost:5001/getsfdata", {
          }).then(res => {
            let studentData = [];
            res.data.forEach(item => {
              if (item.user === "student") {
                studentData.push(item);
              }
            });
            setStudentData(studentData);
          }).catch(e => {
            console.log(e);
          });
        } catch (e) {
          console.log(e);
        }
      }

      //for faculty
      else if (user === "faculty") {
        try {
          axios.get("http://localhost:5001/getsfdata", {
          }).then(res => {
            let facultyData = [];
            res.data.forEach(item => {
              if (item.user === "faculty") {
                facultyData.push(item);
              }
            });
            setStudentData(facultyData);
          }).catch(e => {
            console.log(e);
          });
        } catch (e) {
          console.log("No data load due to unknown problem");
          console.log(e);
        }
      }
    }).catch(e => {
      console.log("wrong details")
      console.log(e);
    })
  }
  catch (e) {
    console.log("No User LoggedIn")
  }

  axios.get('http://localhost:5001/download-attendance')
  .then(response => {
      setPdfs(response.data);
      console.log(pdfs)
  })
  .catch(error => {
      console.error('Error fetching the PDF list', error);
  });
 },[email, password, user])
  

  return (
    <div id='user-main'>
      <div className='updateform'>
        <form>
          <label htmlFor='email'></label>
          <input type='text' placeholder='Tom Cruise' id='updateinput'></input>
          <button onClick={(e) => {
                         try {
                            axios.put("http://localhost:5001/update", {
                             data: { email:emaildata, name:document.querySelector("#updateinput").value }
                           });
                         } catch (error) {
                           console.error('There was an error updating the user!', error);
                         }
                    
                      }}>Submit</button>
        </form>
      </div>
      {/*Admin Dashboard*/}
      {user === "admin" ?
        <div>  
          <h3 className='table-headings' id='admin-table-headings'>Admin Details</h3> 
          <table>
            <thead>
              <tr>
                <th>Email</th>
                <th>Password</th>
              </tr>
            </thead>
            {details === 'notexist' ? console.log("Not LogedIn") :
              <tbody>
                { details.map((detail1) => {
                  return <tr>
                    <td>{detail1.email}</td>
                    <td>{detail1.password}</td>
                  </tr>
                })}
              </tbody>
            }
          </table>
          <br></br>
          <table>
            <thead>
            <h3 className='table-headings'>Student Details</h3>
              <tr>
                <th>Name</th>
                <th>D.O.B</th>
                <th>Fathers Name</th>
                <th>Contact No.</th>
                <th>Stream</th>
                <th>Email</th>
                <th>Password</th>
                <th>Action</th>
              </tr>
            </thead>
            {studentdata === 'notexist' ? console.log("Not LogedIn") :
              <tbody>
                {studentdata.map((detail2) => {
                  return <tr>
                    <td>{detail2.name}</td>
                    <td>2000</td>
                    <td>Mr. John</td>
                    <td>9999999999</td>
                    <td>{detail2.streamordep}</td>
                    <td>{detail2.email}</td>
                    <td>{detail2.password}</td>
                    <td><button className='delete'
                      onClick={() => {
                        console.log("test1" + detail2.email)
                        try {
                          console.log("test2" + detail2.email)
                          const response = axios.delete("http://localhost:5001/delete", {
                            data: { email: detail2.email }
                          });
                          console.log(response.data);
                        } catch (error) {
                          console.log(error)
                        }
                        window.location.reload();
                      }}>Delete</button>

                      < button className='update' onClick={() => {
                       document.querySelector(".updateform").style.display = "flex"
                       setEmailData(detail2.email);
                      }}>Update</button></td>
                  </tr>
                })}
              </tbody>
            }
          </table>

          <br></br>

          <table>
            <thead>
            <h3 className='table-headings'>Faculty Details</h3>
              <tr>
                <th>Name</th>
                <th>D.O.B</th>
                <th>Fathers Name</th>
                <th>Contact No.</th>
                <th>Department</th>
                <th>Email</th>
                <th>Password</th>
                <th>Action</th>
              </tr>
            </thead>
            {facultydata === 'notexist' ? console.log("Not LogedIn") :
              <tbody>
                {facultydata.map((detail3) => {
                  return <tr>
                    <td>{detail3.name}</td>
                    <td>2000</td>
                    <td>Mr. John</td>
                    <td>9999999999</td>
                    <td>{detail3.streamordep}</td>
                    <td>{detail3.email}</td>
                    <td>{detail3.password}</td>
                    <td><button className='delete' onClick={() => {
                      try {
                        const response = axios.delete("http://localhost:5001/delete", {
                          data: { email: detail3.email }
                        });
                        console.log(response.data);
                      } catch (error) {
                        console.log(error)
                      }
                      window.location.reload();
                    }}>Delete</button>
                    <button className='update' onClick={() => {
                       document.querySelector(".updateform").style.display = "flex"
                       setEmailData(detail3.email);
                      }}>Update</button></td>
                  </tr>
                })}
              </tbody>
            }
          </table>
        </div> : ''
      }
      {/*Student Dashboard*/}
      {user === "student" ?
        <div>
          <h3 className='table-headings'>Student Details</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>D.O.B</th>
                <th>Fathers Name</th>
                <th>Contact No.</th>
                <th>Department</th>
                <th>Email</th>
                <th>Password</th>
                <th>Action</th>
              </tr>
            </thead>
            {details === 'notexist' ? console.log("Not LogedIn") :
              <tbody>
                {details.map((detail1) => {
                  return <tr>
                    <td>{detail1.name}</td>
                    <td>2000</td>
                    <td>Mr. John</td>
                    <td>9999999999</td>
                    <td>{detail1.streamordep}</td>
                    <td>{detail1.email}</td>
                    <td>{detail1.password}</td>
                    <td><button className='update' onClick={() => {
                       document.querySelector(".updateform").style.display = "flex"
                       setEmailData(detail1.email);
                      }}>Update</button></td>
                  </tr>
                })}
              </tbody>
            }
          </table>
            <div className='attendance-board'>
              <h3>Attendance</h3>
               {pdfs.map((pdf, index) => (
                    <p key={index}>
                        <a href={`http://localhost:5001/download-attendance/${pdf}`} download>{pdf}</a>
                    </p>
                ))}
            </div>
        </div> : ''

      }

      {/*Faculty Dashboard*/}
      {user === "faculty" ?
        <div>
          <h3 className='table-headings'>Faculty Details</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>D.O.B</th>
                <th>Fathers Name</th>
                <th>Contact No.</th>
                <th>Department</th>
                <th>Email</th>
                <th>Password</th>
                <th>Action</th>
              </tr>
            </thead>
            {details === 'notexist' ? console.log("Not LogedIn") :
              <tbody>
                {details.map((detail1) => {
                  return <tr>
                    <td>{detail1.name}</td>
                    <td>2000</td>
                    <td>Mr. John</td>
                    <td>9999999999</td>
                    <td>{detail1.streamordep}</td>
                    <td>{detail1.email}</td>
                    <td>{detail1.password}</td>
                    <td><button className='update' onClick={() => {
                       document.querySelector(".updateform").style.display = "flex"
                       setEmailData(detail1.email);
                      }}>Update</button></td>
                  </tr>
                })}
              </tbody>
            }
          </table>
          <button className='upload-files' onClick={()=>{
            navigate("/fileupload")
          }}>Upload Files</button>
        </div> : ''
      }

      <button className='logout' onClick={(event) => {
        document.getElementById("login/signup").style.display = "inline"
        document.getElementById("user").style.display = "none"
        let logoutTimeout = setTimeout(() => {
          localStorage.clear();
          
        }, 100);
        clearTimeout(logoutTimeout);
        navigate('/');
      }
      }>Logout</button>

    </div>
  )
}
