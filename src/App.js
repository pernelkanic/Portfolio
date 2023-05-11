import React, { useState } from 'react';
import './App.css';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillInstagram,AiFillLinkedin} from 'react-icons/ai'
import devhed from './programmer-avatar-developer-coder-male-professional-character-occupation-profession-2-512-4189073340.png'
import { BrowserRouter as Router, Switch, 
    Route, Redirect, Routes, BrowserRouter,} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';


function App() {
 
  
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element ={<About/>}/>
     
    </Routes>
    </BrowserRouter>
  );
}

export default App;
