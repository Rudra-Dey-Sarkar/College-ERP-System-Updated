import React, { useEffect, useState} from 'react';
import './Login.css';
import axios from "axios"
import { useNavigate } from 'react-router-dom';


function AdminLogin() {
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

  localStorage.clear();
  const handleUserSelect = () => {
    if (document.querySelector(".userselects").value === "admin"){
      navigate('/adminlogin');
    } else if (document.querySelector(".userselects").value === "student") {
      navigate('/studentlogin');
    } else {
      navigate('/facultylogin');   
    }
  };

  const validate = () =>{
    if(window.location.pathname==="/adminlogin"){
      document.querySelector(".userselects").options.selectedIndex= 0;

    }else if(window.location.pathname==="/studentlogin"){
    document.querySelector(".userselects").options.selectedIndex= 1;
   
    }else if(window.location.pathname==="/facultylogin"){
      document.querySelector(".userselects").options.selectedIndex= 2;
    
      }
  }



  useEffect(() => {
    navcheck();
    validate();
    setUser(document.querySelector(".userselects").value)
  }, []);

  //LogIn check in data base
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [user, setUser]=useState('')
  async function submit(e){
      e.preventDefault();
    //https://college-erp-system-updated.vercel.app/login
      try{
          await axios.post("https://college-erp-system-updated.vercel.app/login",{
              user,email,password
          })
          .then(res=>{
              if(res.data==="exist"){
                document.getElementById("login/signup").style.display = "none"
                document.getElementById("user").style.display = "inline"
                 alert("User Already Exists");
                 navigate('/user',  { state: { user, email, password } });
              } 
              else if(res.data==="notexist"){
                  alert("User Does Not Exists !, Please SignUp First")
              }
          }).catch(e=>{
            alert("wrong details")
            console.log(e);
        })

    }
    catch(e){
        console.log(e);

    }
  }

  return (
    <div className='logreg'>
      <form className="login">
        <label htmlFor='users'>Select Admin or Student or Faculty</label>
        <select name='users' className='userselects' onChange={handleUserSelect}>
          <option value='admin'>Admin</option>
          <option value='student'>Student</option>
          <option value='faculty'>Faculty</option>
        </select>
        <label htmlFor="email">Enter Your Email ID :</label>
        <input type='email' className='inputs' placeholder='example@gmail.com' name='email' onChange={(e) => { setEmail(e.target.value) }}></input>

        <label htmlFor="pwd">Enter Your Password :</label>
        <input type='password' className='inputs' name='pwd' onChange={(e) => { setPassword(e.target.value) }}></input>

        <button className='login-btn' onClick={submit}>Login</button>
      </form>
    </div>
  )
}


export default AdminLogin;
