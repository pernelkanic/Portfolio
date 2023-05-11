import React, { useState } from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillFacebook, AiFillGithub, AiFillInstagram,AiFillLinkedin} from 'react-icons/ai'
import devhed from './programmer-avatar-developer-coder-male-professional-character-occupation-profession-2-512-4189073340.png'
import { BrowserRouter ,Link } from 'react-router-dom';
import video from "./wallpaper.mp4"
import { IconContext } from "react-icons";



    function Home() {
  const [darkMode ,setDarkMode] = useState(false);
  
  return (


    <div className= {darkMode ? "dark" : ""}>
      <div className >
      <header className>
        
        <main className='  dark:bg-gray-900 '>
        <section  className='  min-h-screen '>
          
        <nav className=' flex navbar navbar-expand-lg  bg-black  p-9 mb-0  dark: text-white '>
        <div className=" flex container-fluid ">

          <h1 className=' text-xl font-serif mr-10 text-orange-500'>Portfolio</h1>
          <div className=' mr-80 '>
            <ul className='flex justify-between mr-40'>
                <li><Link  className="text-xl  pr-20  justify-start  font-serif  dark:text-white" to='/'>Home</Link></li>   
                <li><Link className="text-xl  justify-start  font-serif  dark:text-white" to='/about'>About</Link></li>     
            </ul>
          </div>
          
          <div className='text-xl  flex px-0 font-serif'>
          <ul className ='flex  pl-80'>
            <li><Link className="text-xl  font-serif pr-20  dark:text-white" to='/contact'>Contact</Link></li>
           
            
            <li><a className="bg-gradient-to-r from-orange-500  to-red-500 text-white px-3 py-2 rounded-md ml-1 text-right" href='https://drive.google.com/drive/folders/1kCrDdY70y3k4YklsAduNLrt8XDbZTLm_?usp=sharing#' target="_blank" >Resume</a></li>
            
          </ul>
          </div>
          </div>

          </nav>
            <div className='relative top-0 	min-w-fit w-full h-full  object-contain m-0 overflow-hidden	  '><video src= {video} className="overflow-hidden	 w-full h-full min-w-full m-0 object-contain  opacity-70 " autoplay="true" autoPlay loop muted/></div> 
         
        
     
      
      </section>
     
      </main>
      </header>

      

  
    
     
      </div>
    </div>

  );
}
export default Home;