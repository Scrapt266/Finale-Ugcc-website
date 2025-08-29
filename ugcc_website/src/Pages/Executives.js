import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import React from "react";
import E1 from "../Images/Executive Committee/E1.jpg"
import E2 from "../Images/Executive Committee/E2.jpg"

function Executives () {
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
  
    <div className="Executives">
        <div className="header">
            <h1>Executive Members</h1>
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
        
        <div className='executives'>
            <div className='E1'>
                <img src={E1} alt="Executive Members"/>
            </div >

            <div className='E2'>
                  <img src={E2} alt="Executive Members"/>
            </div>
            </div>
            <div className='main5'>
            <div className='members'>

            <div>
                 <label >Club Faculty Advisor</label>
            </div>
                <p>Ms. Sandra Khan</p>
                 <div>
               <label >Past Club Presidents </label>
               </div>
                    <ul>
                        <li>2017/2018- Mr. Kwesi Elliot, Fourth year Computer Science student</li>
                        <li>2018/2019- Mr. Cloyd London, Final Year Student</li>
                        <li>2019/2020- Mr. Jason Jacobs, 3rd Year Computer Science Student</li>
                        <li>2020/2021- Mr. Jason Jacobs, 4th Year Computer Science Student</li>
                        <li>2021/2022- Ms. Waynetta Naughton, First-year Computer Science Student. </li>
                        <li>2022/2023- Ms. Waynetta Naughton, Second-year Computer Science Student.  </li>
                    </ul>
                    <div>
                    <label >vice Presidents</label>
                    </div>
                    <ul>
                        <li>(year 2017/2018)Mr. Teekae Jordan </li>
                        <li>(year 2018/2019)Mr. Teekae Jordan</li>
                        <li>(year 2019/2010)Mr. Wayne Forde</li>
                        <li>(year 2020/2021)Mr. Wayne Forde</li>
                        <li>(year 2021/2022)Ms. Marissa Lowe </li>
                        <li>(year 2021/2022)Mr. Kieron Abrigo</li>
                    </ul>
                    <div>
                    <label >Secretary</label>
                    </div>
                    <ul>
                       <li>(year 2017/2018)Mr. Shemar Austin </li>
                        <li>(year 2018/2019)Mr. Shemar Austin</li>
                        <li>(year 2019/2010)Ms. Krystal Pereira</li>
                        <li>(year 2020/2021)Ms. Krystal Pereira</li>
                        <li>(year 2021/2022)Mr. Marion Glasgow </li>
                        <li>(year 2021/2022)Ms. Rokaylia Thomas</li>
                    </ul>

                        <div>
                      <label >Treasurer </label>
                      </div>
                    <ul>
                        <li>(year 2018/2019)Mr. Cleadon Brummel</li>
                        <li>(year 2019/2010)Mr. Sharukh Khan</li>
                        <li>(year 2020/2021)Mr. Sharukh Khan</li>
                        <li>(year 2021/2022)Mr. Wilton Lawrence</li>
                        <li>(year 2021/2022)Ms. Ms.ShawnnaFredricks</li>
                    </ul>

                    <div>
                      <label>Events Coordinator</label>
                      </div>
                    <ul>
                        <li>(year 2018/2019)Mr. Jason Jacobs</li>
                        <li>(year 2019/2010)Mr. Teekae Jordan</li>
                        <li>(year 2020/2021)Mr. Teekae Jordan</li>
                        <li>(year 2021/2022)Ms. Felicia Gouveia</li>
                        <li>(year 2021/2022)Mr. Ngozi Thomas</li>
                    </ul>
                    <div>
                    <label >PRO</label>
                     </div>
                    <ul>
                        <li>(year 2021/2022)Mr. Marion Glasgow</li>
                    </ul>
                    <div>
                     <label >Events Coordinator</label>
                      </div>
                    <ul>
                        <li>(year 2021/2022)Mr. Jason Jacobs</li>
                    </ul>



      
        </div>
        </div>
              <footer>&copy; 2022 UGCC. All Rights Reserved</footer>
    </div>
  );
}

export default Executives;
