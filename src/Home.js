import React, { useState } from 'react';
import {BsFillMoonStarsFill, BsWindowSidebar} from 'react-icons/bs';
import {AiFillFacebook, AiFillGithub, AiFillInstagram,AiFillLinkedin} from 'react-icons/ai'
import devhed from './programmer-avatar-developer-coder-male-professional-character-occupation-profession-2-512-4189073340.png'
import { BrowserRouter ,Link } from 'react-router-dom';
import video from "./wallpaper.mp4"
import { IconContext } from "react-icons";
  import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';
import{Link as Link2 } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHomeLg } from '@fortawesome/free-solid-svg-icons';
import { faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from "react-tooltip";
import { Tooltip } from '@mui/material';


function Home() {
  const [darkMode ,setDarkMode] = useState(false);
  const [click, setClick] = useState(false)
  const closeMenu = () => setClick(false)
  const handleClick =()=>{
    window.location.href='https://drive.google.com/drive/folders/1kCrDdY70y3k4YklsAduNLrt8XDbZTLm_?usp=sharing#'
  }
  
  return (


    <div className= {darkMode ? "dark" : ""}>
      <div className >
      <header className>
        
        <main className='  dark:bg-gray-900 p-0 m-0 '>
        <section  className='  min-h-screen min-w-90vh max-[400px]:min-w-screen  max-[400px]:overflow-hidden '>
          
        <nav className=' flex navbar navbar-expand-lg  bg-black  p-9 pb-0 mb-0  dark: text-white max-[400px]:p-3 '>
          
        <div className=" flex container-fluid max-[400px]: ">

          <h1 className='  text-xl font-serif mr-10 text-blue-400 max-[400px]:ml-36 mb-4'>Portfolio</h1>
          <div className=' mr-80 '>
            <ul className='flex justify-between mr-[34rem] mb-4 mt-3  '>
              
            <li><Link><Tooltip title="Home"><FontAwesomeIcon icon={faHomeLg} className="ml-5 text-2xl mr-16 transition ease-in-out delay-100 text-gray-100 hover:-translate-y-1 hover:text-blue-600 hover:scale-110  duration-300 pt-1 "/></Tooltip></Link></li>
                <li><Link className="text-xl  justify-start  font-serif  dark:text-white" to='/about'><Tooltip title="About" ><FontAwesomeIcon icon={faUserLarge} className="pt-1 text-2xl mr-20 transition ease-in-out delay-100 text-gray-100 hover:-translate-y-1 hover:text-blue-600 hover:scale-110  duration-300 max-[400px]:flex"/></Tooltip></Link></li>     
            
            
            
          
          <div className='text-xl  flex  px-0 font-serif max-[400px]:flex justify-evenly'>
          <ul className =' max-[400px]:p-0 max-[400px]:gap-1 flex max-[400px]:flex max-[400px]:justify-between max-[400px]:mr-56 '>
          <li><Link2  activeClass="active"  spy={true} smooth={true} offset={50} duration={500} onSetActive={closeMenu} className="text-2xl  font-serif mr-20  dark:text-white  max-[400px]:m-0  " to='foot'><Tooltip title="Contact" ><FontAwesomeIcon icon={faEnvelope} className="pt-1 transition ease-in-out delay-100 text-gray-100 hover:-translate-y-1 hover:text-blue-600 hover:scale-110  duration-300 "/></Tooltip></Link2></li>
            <li><button className=" transition ease-in-out delay-150 bg-blue-400 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300   px-3 py-2 rounded-md  text-right max-[400px]:text-xs max-[400px]:px-6   max-[400px]:py-3 max-[400px]:rounded-md max-[400px]:ml-9  " onClick={handleClick} target ='_blank'>Profile</button></li>
            </ul>
            </div>
            </ul>
            
            </div>
            
            
          
         
          
          </div>

          </nav>
            <div className='relative top-0 	min-w-fit w-full h-full  object-contain m-0 overflow-hidden '><video src= {video} className="overflow-hidden	  w-full h-full min-w-full m-0 object-contain  opacity-95 max-[400px]:min-w-fit   " autoplay="true" autoPlay loop muted/></div> 
     <div className='top-0  pb-30 mt-40 flex flex-col justify-center items-center absolute text-center w-100 h-100  '>
      <div className=' top-0 text-center p-2  '>
          <h2 className=' text-5xl py-4 text-white font-medium max-[400px]:text-xl max-[400px]:mt-10 '>myportfolio</h2>
          <h3 className='text-3xl  py-2  text-white dark:text-white md:text-black'>Student at Rajalakshmi Engineering College</h3>
          <p className='py-2 font-mono-medium leading-10 text-white  dark:text-white'>I am currently learning React and This is my first portofolio website!!</p>

      </div>  


      <div className=' flex text-5xl justify-center gap-20 py-3 text-gray-600 mt-10'>
      
          <a href='https://github.com/pernelkanic' target="_blank" ><IconContext.Provider value={{ color: 'orange' }}><AiFillGithub /></IconContext.Provider></a>
          <a href='https://www.linkedin.com/in/venkatkrishnan-raghavan-8b3017249' target="_blank"><IconContext.Provider value={{ color: 'orange' }}><AiFillLinkedin /></IconContext.Provider> </a>
          
      </div>
      <div className='  relative my-10'>
        <img src ={devhed} className="w-60 mt-10  h-75 mx-auto bg-gradient-to-b from-red-500 to-orange-500 rounded-full overflow-hidden max-[400px]:mt-20 max-[400px]:w-40 max-[400px]:h-40" />
      </div>
      
      </div>
    </section>  
    
      <section>
     
      
      </section>
      </main>
      

      </header>
      
      <footer id= 'foot'> 
        <MDBFooter className='bg-black text-center pt-10 text-white '>
      <MDBContainer className='p-4  pb-0 max-[400px]:mb-20 '>
        <section className='mb-4 gap-8  max-[400px]:min-w-full max-[400px]:'>
        <a href='https://github.com/pernelkanic' target="_blank"><MDBBtn outline color="light" floating className='m-1'  role='button'>
           <AiFillGithub />
          </MDBBtn></a>

          <a href='https://github.com/pernelkanic' target="_blank"><MDBBtn outline color="light" floating className='m-1'  role='button'>
          <AiFillFacebook />
          </MDBBtn></a>

          <a href='https://github.com/pernelkanic' target="_blank"><MDBBtn outline color="light" floating className='m-1'role='button'>
              <AiFillInstagram />
          </MDBBtn></a>
         

          <a href='https://github.com/pernelkanic' target="_blank"> <MDBBtn outline color="light" floating className='m-1'  role='button'>
          <AiFillLinkedin/>
          </MDBBtn></a>

          
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        venkat     
      </div>
    </MDBFooter>
    
    </footer>
  
    
     
      </div>
    </div>

  );
}
export default Home;