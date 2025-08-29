import React from "react";
import {BrowserRouter as Router, Route, Routes, Link, } from "react-router-dom"
import './App.css';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import About from './Pages/About';
import Events from './Pages/Events';
import Executives from './Pages/Executives';
import Login from './Pages/Login';
import Profile from './Pages/Account';
function App() {
  
  return (
   <Router>
      <Routes>
        <Route path='/'element= {<Home/>}/>
        <Route path='/Home'element= {<Home/>}/>
        <Route path='/Signup'element= {<Signup/>}/>
        <Route path='/Login'element= {<Login/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path='/About'element= {<About/>}/>
        <Route path='/Events'element= {<Events/>}/>
        <Route path='/Executives'element= {<Executives/>}/>
      </Routes>
   </Router>
  );
}

export default App;
