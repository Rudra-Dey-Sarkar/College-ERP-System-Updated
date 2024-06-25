import React, { useEffect, useState} from 'react';
import axios from "axios"
import {Link, useNavigate } from 'react-router-dom';

function FacultyLogin() {
  const navigate = useNavigate();
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
    validate();
    setUser(document.querySelector(".userselects").value)
    
  }, []);


  
//LogIn check in data base
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [user, setUser]=useState('')

  async function submit(e){
      e.preventDefault();
      try{
          await axios.post("https://college-erp-system-updated.vercel.app/login",{
            user,email,password
          })
          .then(res=>{
            if(res.data==="exist"){
               document.getElementById("login/signup").style.display = "none"
               document.getElementById("user").style.display = "inline"
                alert("User Already Exists!")
                navigate('/user',  { state: { user, email, password } });
            }
            else if(res.data==="notexist"){
            alert("User Does Not Exist Please! Please Register");
            }
        })
        .catch(e=>{
            alert("wrong details")
            console.log(e);
        })

    }
    catch(e){
        console.log(e);

    }
  }



  return (
    <div>
              <form className="login">
        <label htmlFor='users'>Select Admin or Student or Faculty</label>
        <select name='users' className='userselects' onChange={handleUserSelect}>
          <option value='admin'>Admin</option>
          <option value='student'>Student</option>
          <option value='faculty'>Faculty</option>
        </select>
        <label htmlFor="email">Enter Your Email ID :</label>
        <input type='email' className='inputs' placeholder='example@gmail.com' name='email' onChange={(e) => { setEmail(e.target.value) }} ></input>

        <label htmlFor="pwd">Enter Your Password :</label>
        <input type='password' className='inputs' name='pwd' onChange={(e) => { setPassword(e.target.value) }}></input>

        <button className='login-btn' onClick={submit}>Login</button>


        <div className='signuplink'>
          <label>Don't Have An Account ? <Link to="/studentsignup"> <b>Sign Up</b></Link></label>
          </div>   
      </form>
    </div>
  )
}

export default FacultyLogin;
