import { useState, useEffect } from 'react';
import React from "react";  
import { Link } from "react-router-dom"
import IMGWA0020 from "../Images/DiploHack/IMGWA0020.jpg"
import IMGWA0012 from "../Images/DiploHack/IMGWA0012.jpg"
import IMGWA0019 from  "../Images/DiploHack/IMGWA0019.jpg"
import IMG2WA0020 from "../Images/DiploHack/IMG2WA0020.jpg"
import IMGWA0023 from "../Images/DiploHack/IMGWA0023.jpg"
import IMGWA0031 from   "../Images/DiploHack/IMGWA0031.jpg"
import IMGWA0044 from "../Images/DiploHack/IMGWA0044.jpg"

function Events() {
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
    <div className="Events">
        <div className="header">
            <h1>Event Archive</h1>
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
            <div className='collection'>
                <div>
                <img src={IMGWA0020} alt="Image showing past ugcc events"/>
                </div>
                <div>
                <img src={IMGWA0044} alt="Image showing past ugcc events"/>
                </div>
                <div>
                <img src={IMGWA0012} alt="Image showing past ugcc events"/>
                </div>
                <div>
                <img src={IMGWA0019} alt="Image showing past ugcc events"/>
                </div>
                <div>
                <img src={IMG2WA0020} alt="Image showing past ugcc events"/>
                </div>
                <div>
                <img src={IMGWA0023} alt="Image showing past ugcc events"/>
                </div>
                <div>
                <img src={IMGWA0031} alt="Image showing past ugcc events"/>
                </div>
            </div>
            <div>
        </div>
        <div className="main3">
        <div>
        <h1>Acomplished Activities(year 2018)</h1>
            <ol>
                <li>•Creation/launch of the UGCC website. </li>
                <li>•Workshop held for cybersecurity month held downstairs of natural science building. </li>
                <li>•Commencement of ethical hacking course from scratch.  </li>
            </ol>
        
        <h1>Acomplished Activities(year 2019)</h1>
            <ol>
                <li>•OAS first ever DipLoHack event, which took place in Washington DC. This event was an eye opener for our participants, whereby we learn international policies that deal with cybersecurity crime/warfare.  </li>
                <li>•Continuation of ethical hacking training. This time we decided to offer the class online instead of a physical meetup due to several members having class clashing with our Saturday class. </li>
                <li>•Two UGCC admin members welcomed the invite by the then NFMU to have a half-day ICT session with female students from a few government secondary schools educating them on the importance of “knowing how to be safe on the internet”. This activity was held at the Arthur Chung Convention Centre. </li>
            </ol>
     
        <h1>The 2018-2019 Club Elections</h1>
            <p> Our second elections were Held for the second year to vote in the new administration body to manage the UGCC. This was a transparent but successful election.
            Cloyd London was elected as president for the club, Teekae Jordan was elected vice president,  Shemar Austin was elected as secretary, Jason Jacobs was elected as an event coordinator, Cleadon Brummell was elected as Treasurer, along with Ms. Sandra Khan as the Club Advisor for the club. All admin members have served well in their designated task and have shown an appetite for leadership not only in the computer science field but leadership skills in general. </p>
    </div>
        </div>
              <footer>&copy; 2022 UGCC. All Rights Reserved</footer>
    </div>    
  );

}

export default Events;
