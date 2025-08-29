import React from "react";
import Daco_2563210 from "../Images/Daco_2563210.png"
import Img1 from "../Images/Activities/Img1.jpg"
import Img2 from "../Images/Activities/Img2.jpg"
import Img4 from "../Images/Activities/Img4.jpg"
import Img5 from "../Images/Activities/Img5.jpg"
import "../Components/Home.css"


function Home() {


  return (
    <div className="Home">
      <div className="header">
          <img src={Daco_2563210} alt="UGCCLogo"/>
          <p>University of Guyana Cybersecurity Club</p>
      </div>
      <div className="navbar">
        <p>University of Guyana Cybersecurity Club</p>
      </div>
      <div className="Hero" >
       <h1>Together We Can Secure ICT</h1>
        <p>
          UGCC is a group founded under the University Of Guyana, 
          with the main purpose of bringing awairness to cyber threats 
          and assisting in enhancing personal security. membership is open 
          to all undergraduate students and faculty members in the Computer 
          Science Department at the University of Guyana. if interested, 
          why notjoin the club?
        </p>
      </div>
      <div className="main">
        <h1>UGGC</h1>
        <img src={Img1}  alt="Picture of UGCC group event"/>
        <img src={Img2}  alt="Picture of UGCC group event"/>
        <img src={Img4}  alt="Picture of UGCC group event"/>
        <img src={Img5}  alt="Picture of UGCC group event"/>
      </div>
      <footer></footer>
    </div>
  );
}

export default Home;
