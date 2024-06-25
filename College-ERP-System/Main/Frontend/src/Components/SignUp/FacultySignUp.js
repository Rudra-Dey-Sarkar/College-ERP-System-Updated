import './FacultySignUp.css'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function FacultySignUp() {
  //navigations 

  const navigate = useNavigate();
  const handleUserSelect = () => {
    if (document.querySelector(".userselects").value === "student"){
      navigate('/studentsignup');
    } else {
      navigate('/facultysignup');
    }
  };

  const validate = () =>{
    if(window.location.pathname==="/studentsignup"){
      document.querySelector(".userselects").options.selectedIndex= 0;
    }else if(window.location.pathname==="/facultysignup"){
    document.querySelector(".userselects").options.selectedIndex= 1;
    }
    setUser(document.querySelector('.userselects').value);
  }

  useEffect(() => {
    validate();
  }, []);


//Check boxs
const [selectedDepartment, setSelectedDepartment] = useState(null);

const handleCheckboxChange1 = (departments) => {
    setSelectedDepartment(departments);
    if(document.querySelector('.bcainputs').checked){
      setDepartment(document.querySelector('.bcainputs').value)
    }else if(document.querySelector('.bbainputs').checked){
      setDepartment(document.querySelector('.bbainputs').value)
    }else if(document.querySelector('.cseinputs').checked){
      setDepartment(document.querySelector('.cseinputs').value)
    } else if(document.querySelector('.eceinputs').checked){
      setDepartment(document.querySelector('.eceinputs').value)
    } else if(document.querySelector('.eeinputs').checked){
      setDepartment(document.querySelector('.eeinputs').value)
    } else if(document.querySelector('.meinputs').checked){
      setDepartment(document.querySelector('.meinputs').value)
    } else if(document.querySelector('.ceinputs').checked){
      setDepartment(document.querySelector('.ceinputs').value)
    }
};

const [selectedGender, setSelectedGender] = useState(null);

const handleCheckboxChange2 = (gender) => {
    setSelectedGender(gender);
    if(document.querySelector('.maleinputs').checked){
      setGender(document.querySelector('.maleinputs').value)
    }else if(document.querySelector('.femaleinputs').checked){
      setGender(document.querySelector('.femaleinputs').value)
    } 
};


//singup data send to database
const [user, setUser]=useState('')
const[name,setName]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [streamordep, setDepartment]=useState('')
const [gender, setGender]=useState('')

async function submit(e){
    e.preventDefault();

    try{

        await axios.post("http://localhost:5001/signup",{
          name,email,password,user,streamordep,gender
        })
        .then(res=>{
            if(res.data==="exist"){
                alert("User Already Exists!, Please Login")
            }
            else if(res.data==="notexist"){
            alert("User Registered");
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
          <option value='student'>Student</option>
          <option value='faculty'>Faculty</option>
        </select>
        <label htmlFor="name">Enter Your Name :</label>
        <input type='text' className='inputs' placeholder='Jack William' name='name'  onChange={(e) => { setName(e.target.value)}}></input>

        <div className='department'>
            <label htmlFor='department'>Select Your Department :</label>
            <label htmlFor='BCA'>
                BCA :     
                <input
                    type='checkbox'
                    value='bca'
                    className='bcainputs'
                    checked={selectedDepartment === 'bca'}
                    onChange={() => handleCheckboxChange1('bca')}
                />
            </label>
            <label htmlFor='bba'>
                BBA :
                <input
                    type='checkbox'
                    value='bba'
                    className='bbainputs'
                    checked={selectedDepartment === 'bba'}
                    onChange={() => handleCheckboxChange1('bba')}
                />
            </label>

            <label htmlFor='stream'>Select Your Branch In BTech :</label>
            <label htmlFor='CSE'>
                CSE:     
                <input
                    type='checkbox'
                    value='cse'
                    className='cseinputs'
                    checked={selectedDepartment === 'cse'}
                    onChange={() => handleCheckboxChange1('cse')}
                    
                />
            </label>
            <label htmlFor='ece'>
                ECE:
                <input
                    type='checkbox'
                    value='ece'
                    className='eceinputs'
                    checked={selectedDepartment=== 'ece'}
                    onChange={() => handleCheckboxChange1('ece')}
                />
            </label> 
            <label htmlFor='me'>
                ME:
                <input
                    type='checkbox'
                    value='me'
                    className='meinputs'
                    checked={selectedDepartment === 'me'}
                    onChange={() => handleCheckboxChange1('me')}
                />
            </label> 

            <label htmlFor='ee'>
                EE:
                <input
                    type='checkbox'
                    value='ee'
                    className='eeinputs'
                    checked={selectedDepartment === 'ee'}
                    onChange={() => handleCheckboxChange1('ee')}
                />
            </label> 

            <label htmlFor='ce'>
                CE:
                <input
                    type='checkbox'
                    value='ce'
                    className='ceinputs'
                    checked={selectedDepartment === 'ce'}
                    onChange={() => handleCheckboxChange1('ce')}
                />
            </label> 
        </div>

        <div className='genders'>
            <label htmlFor='gender'>What is your gender :</label>
            <label htmlFor='male'>
                Male :     
                <input
                    type='checkbox'
                    value='male'
                    className='maleinputs'
                    checked={selectedGender === 'male'}
                    onChange={() => handleCheckboxChange2('male')}
                />
            </label>
            <label htmlFor='female'>
                Female :
                <input
                    type='checkbox'
                    value='female'
                    className='femaleinputs'
                    checked={selectedGender === 'female'}
                    onChange={() => handleCheckboxChange2('female')}
                />
            </label>
        </div>


        <label htmlFor="email">Enter Your Email ID :</label>
        <input type='email' className='inputs' placeholder='example@gmail.com' name='email'  onChange={(e) => { setEmail(e.target.value) }}></input>

        <label htmlFor="pwd">Enter Your Password :</label>
        <input type='password' className='inputs' name='pwd' onChange={(e) => { setPassword(e.target.value) }}></input>

        <button className='login-btn' onClick={submit}>SignUp</button>

        <div className='signuplink'>
          <label>Already Have An Account ? <Link to="/adminlogin"> <b>Login</b></Link></label>
        </div>
      </form>
    </div>
  )
}

export default FacultySignUp;