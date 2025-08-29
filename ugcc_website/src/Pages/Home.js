import React from "react";
import { Link } from "react-router-dom"
import Daco_2563210 from "../Images/Daco_2563210.png"
import Img1 from "../Images/Activities/Img1.jpg"
import Img2 from "../Images/Activities/Img2.jpg"
import Img4 from "../Images/Activities/Img4.jpg"
import Img5 from "../Images/Activities/Img5.jpg"

import "../Components/Pages.css"
import { useState, useEffect } from 'react';


function Home() {

  const [Name,  setProfilename] = useState("")   

  useEffect(() => {
    const value = localStorage.getItem('setprofile'); 
      if (value) {
       const user = JSON.parse(value)
       setProfilename(user.Name);
        console.log(user.Name)
      } else {
        setProfilename("Guest");
        console.log("error user not set");
  
      }
       }, []);

  return (
    <div className="Home">
      <div className="header">
          <img src={Daco_2563210} alt="UGCCLogo"/>
          <p>University of Guyana Cybersecurity Club</p>
      </div>
      <div className="accountdisplay">  
        <Link to="/Profile">
          <img  src="/account.png" alt="Account logo"/>
          <span> {Name} </span></Link>
          </div>
          
      <div className="navbar">
        <nav>
          <Link to="/Home">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Events">Events</Link>
          <Link to="/Executives">Executives</Link>
      </nav>
      </div>
      <div className="Hero" >
       <h1>Together We Can Secure ICT</h1>
        <p>
          UGCC is a group founded under the University Of Guyana, 
          with the main purpose of bringing awairness to cyber threats 
          and assisting in enhancing personal security. membership is open 
          to all undergraduate students and faculty members in the Computer 
          Science Department at the University of Guyana. if interested, 
          why not <Link to="/Signup">Register for the club?</Link>
        </p>
      </div>
      <div className="main">
     
        <img src={Img1}  alt="UGCC group event"/>
        <img src={Img2}  alt="UGCC group event"/>
        <img src={Img4}  alt="UGCC group event"/>
        <img src={Img5}  alt="UGCC group event"/>
      </div>

      <footer>&copy; 2022 UGCC. All Rights Reserved</footer>
    </div>
  );
}

export default Home;
