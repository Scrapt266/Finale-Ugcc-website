import React from "react";
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react';
function About() {

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
   <div className="About">
         <div className="header">
            <h1>About Us</h1>
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
            <div className="main2">
                <div>
                    <div className="Roles">  
                    <ul>
                        <label>President</label>
                        <li>Represent the club</li>
                        <li>Perform administrative club functions</li>
                        <li>Plan strategies and set goals</li>
                        <li>Chair all club meetings </li>
                    </ul>
                    <ul>
                        <label>Vice President</label>
                      <li>Assist the President with his/her duties. </li>
                       <li>Assume the responsibilities of President when necessary</li>
                    </ul>
                    <ul>
                            <label>Secretary </label>
                        <li>Provide club notices to members</li>
                        <li>Record minutes of all meetings</li>
                        <li>Represent the club on social media </li>
                        <li>Maintain a complete and accurate list of all club members</li>
                    </ul>
                <ul>
                       <label>Treasurer</label>
                    <li>Maintain accurate financial records of the Club </li>
                    <li>Work with the President and Vice president, to prepare any budget requests to the appropriate funding source. </li>

                </ul>
                <ul>
                    <label>Events Coordinator</label>
                    <li>Organize club programs, activities and events in accordance with the Club's mandate </li>
                </ul>
                <ul>
                    <label> Club Advisor</label>
                    <li>Be a staff member of the Department of Computer Science at the University of Guyana.</li>
                    <li>Serve as a non-voting member of the Executive Committee</li>
                    <li>Provide guidance and administrative assistance in preparation of the programme of events.</li>
                </ul>
                </div>
                <div className="meeting">
                    <div>
                    <h1>Meetings</h1>
                      </div>
                            <ol>
                                <li>General Meetings of the Club shall be held at least three times per semester at such time and place to be determined by the Executive Committee. </li>
                                <li>A General Meeting will have said to be quorate if at least one third (1/3) of the membership is present, which should include the President or Vice-President and Secretary, in order to conduct official business for the meeting. </li>
                                <li>A General Meeting will have said to be quorate if at least one third (1/3) of the membership is present, which should include the President or Vice-President and Secretary, in order to conduct official business for the meeting. </li>
                                <li>All members of Executive Committee shall be notified of any meeting and the nature of business to be conducted at least three days before such meeting. </li>
                            </ol>
                         </div>
                    <div className="meeting">
                    <div>
                    <h1>Elections</h1>
                    </div>
                        <ol>  
                            <li>Elections will be held annually by September 30th. </li> 
                            <li>Each club member shall have one (1) vote. </li> 
                        <li> A successful candidate in any Club election-related activity will be declared by a simple majority.</li> 
                        </ol>
                    </div>
                    
                    
            </div>

        </div>
           
      
        <div className="socials">
             <p>You can reach out to us with the Socials bellow:</p>
      
          <div>
            <div>
            </div>
                        <div onClick={() => window.location.href = "https://www.facebook.com/uogcyberclub"}>
                            <img 
                            src="/facebook.png" alt="facebook logo"/>
                            <label >facebook</label>
                        </div>
                        <div  onClick={() =>  window.location.href = "mailto:ugcc.csi@uog.edu.gy"}>
                            <img 
                            src="/email.png" alt="email logo"
                            />
                            <label >email</label>
                        </div> 
                     </div>
                      </div>
              <footer>&copy; 2022 UGCC. All Rights Reserved</footer>
  </div>
  
  );
}

export default About;
