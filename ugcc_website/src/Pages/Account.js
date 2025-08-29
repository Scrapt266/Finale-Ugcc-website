import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


function Account() {
    const navigate = useNavigate();
    
      const [Name,  setProfilename] = useState("")   
       const [email, setEmail] = useState('')
      const [status, setStatus] = useState(false);
      const [buttondisplay, setdisplay] = useState('');
      useEffect(() => {
        const value = localStorage.getItem('setprofile'); 
          if (value) {
           const user = JSON.parse(value)
           setProfilename(user.Name);
            setEmail(user.email);
            console.log(user.Name)
            setStatus(true);
              setdisplay('logout')
          } else {
            setProfilename("Guest");
            setEmail("No Account")
            console.log("error user not set");    
              setdisplay('login')
          }
           }, []);


   const buttoncontrol = () => {
        if(status === true){
        setdisplay('logout')
    const confirmation = window.confirm(
        "you are about to remove account info and logout, are you sure?"
        
      )  
      if (confirmation){
         setStatus(false)
        localStorage.clear();
        navigate('/Home')
      }
        }else{
        setdisplay('login')
        navigate('/Login')
           
        }
    }
  
  return (
   <div className="Account">
   
         <div className="header">
          <button className="backbutton" onClick={() => navigate('/')}>
            <img src="/arrow.png"/>
          </button>
             <h1>Account</h1>
        </div>
         <div className="main6">

      <div className="accountinfo">
        <div>
        <span>MemberStatus: Pending</span>
         <span>Username: {Name}</span>
        <span>EmailAddress: {email} </span>
        </div>
      </div>
    <div>
        <button onClick={buttoncontrol}>{buttondisplay}</button>
    </div>
    
    </div>
    </div>
  );
}

export default Account;
