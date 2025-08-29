import React from "react";
import { useState, useEffect } from 'react';
import axios from "axios";
import Daco_2563210 from "../Images/Daco_2563210.png"
import "../Components/Signup.css"
import { Link, useNavigate } from "react-router-dom";



  

function  Signup() {
  const navigate = useNavigate();
  const [status, setStatus] = useState(false);
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState({})
  
  const validatelogin =() =>{
      let errors = {}

      if (!username.trim() ) errors.username = "username is required"
      if (!email.trim() ) errors.email = "email is reqired"
      if (!password.trim() ) errors.password = "password is reqired"
     
      setErrors(errors)
      return Object.keys(errors).length === 0;

  }         
  
  
  const infosubmition = e => {
    e.preventDefault()

    if(!validatelogin()){
        console.log("one ono or more imput field is empty")
      return;
    }

    axios.post('http://localhost:8080/login',  {username: username, email: email ,password: password})
    .then((response) => {
      console.log(response.data);
      

      if(response.data.success){
      alert(
        'Account Made You Have Successfully Logged In!'
      );
      setEmail('');
      setPassword('');
      setStatus(true);
      navigate('/')

         let  profile ={
               Name:  username, 
               email: email,
            };
      localStorage.setItem('setprofile', JSON.stringify(profile))
    }else{
      alert(
        'Login failed Incorrect Email or Password'
      )
      setStatus(false);
    }
    })
    .catch((err) => {
      console.error("Submission error:", err);
    });
  }


  return (
  <div className="Login">
        <div className="header2">
         
          <button className="backbutton" onClick={() => navigate('/')}>
              <img src="/arrow.png"/>
          </button>
            <h1>Ugcc Login</h1>
           <Link to="/Home"> <img src={Daco_2563210} alt="UGCCLogo"/> </Link>
        </div>
        <div className="form">
          <form onSubmit={infosubmition}>
            <label>Name</label>
            <input  type="text" placeholder="Enter Name" id="username" value={username} onChange={(e) =>setUsername(e.target.value)}/>
               {
                errors.username ?<span className="errormessage">{errors.username}</span>: null
              }
            <label >Email Address</label>
            <input type="text" placeholder="Enter E-mail" id="email" value={email} onChange={(e) =>setEmail(e.target.value)}/>
            {
               errors.email? <span className="errormessage">{errors.email}</span>: null
            }
            <label>Password</label>
            <input type="password" placeholder="Enter Password" id="password" value={password} onChange={(e) =>setPassword(e.target.value)}/>
            {
               errors.password ?<span className="errormessage">{errors.password}</span>: null
            }
            <button type="submit">Submit</button>
            </form>   
        </div>
    <div>
    </div>
  </div>
  );
}

export default Signup;
