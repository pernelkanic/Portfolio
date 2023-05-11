import React, { useState } from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillFacebook, AiFillGithub, AiFillInstagram,AiFillLinkedin} from 'react-icons/ai'
import devhed from './programmer-avatar-developer-coder-male-professional-character-occupation-profession-2-512-4189073340.png'
import { BrowserRouter ,Link } from 'react-router-dom';
import video from "./wallpaper.mp4"
import { IconContext } from "react-icons";
import me from './me.jpeg'
import elite from './elite.png';
import wiki from './wiki.jpg'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import{Link as Link2} from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHomeLg } from '@fortawesome/free-solid-svg-icons';
import { faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faArr } from '@fortawesome/free-regular-svg-icons';
import ReactTooltip from "react-tooltip";
import { Tooltip } from '@mui/material';
import './About.css';
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { TypeAnimation } from 'react-type-animation';
import top from './icons8-up-arrow-50.png';
import mern from './mern.jpg';
    function Home() {
        const particlesInit = useCallback(async engine => {
            console.log(engine);
            
            await loadFull(engine);
        }, []);
    
        const particlesLoaded = useCallback(async container => {
            await console.log(container);
        }, []);


  
  const handlelink=()=>{
    
    window.location.href="http://wikipedia.com"
  }
  const handleclick=()=>{
    window.location.href="https://github.com/pernelkanic/React_Search_App"
  }
  const handlemern=()=>{
    window.location.href="https://github.com/pernelkanic/MERN-TodoApp"
  }
  const handleweb=()=>{
    window.location.href="https://www.rajalakshmi.org/innovision23/"
  }
  
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const closeMenu = () => setClick(false)
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  

 
  
  return (


    <div className= 'page'>
        
        <div className='tophover' style={{display: visible ? 'inline' : 'none'}}><button type='button' onClick={scrollToTop} className='topbtn'><Link2  activeClass="active"  spy={true} smooth={true} offset={50} duration={500} onSetActive={closeMenu} className=" " to='home'/><img src={top} alt="" className='topbt'/></button></div>
         <div className='particle'>
            <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#191919",
                    },
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#FFFFFF",
                    },
                    links: {
                        color: "#FFFFFF",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1500,
                        },
                        value: 50,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                },
                detectRetina: true,
            }}
        />
            </div>
      <div className=''>
      <header className>
        
        <nav className='navibar'>

          <h1 className=''>Portfolio</h1>
          
            <ul className='navtext'>
            <li><Link2  to='about' className='about1'><Tooltip title="About" ><FontAwesomeIcon icon={faUserLarge} className=""/></Tooltip></Link2></li>     
            <li><Link2  activeClass="active"  spy={true} smooth={true} offset={50} duration={500} onSetActive={closeMenu} className=" " to='time'><Tooltip title="Timeline" ><FontAwesomeIcon icon={faCalendar} className="envebtn" /></Tooltip></Link2></li>
            <li><Link2  activeClass="active"  spy={true} smooth={true} offset={50} duration={500} onSetActive={closeMenu} className=" " to='foot'><Tooltip title="Contact" ><FontAwesomeIcon icon={faEnvelope} className="envebtn" /></Tooltip></Link2></li>
            <li><button className="profbtn" onClick={handleClick} target ='_blank'>Profile</button></li>
            
            
            </ul>
          
            </nav>
            <div className='profile' id='home'>
                <div className=''>
                    <h2  className='name'>R.VenkataKrishnan</h2>
                    <h2  className ='name' >Rajalakshmi Engineering College</h2>

                    <div className='auto'>
                    <span className=''>I am a  </span>
                    <TypeAnimation sequence={[
                        'Student.',
                         2000,   
                        'Developer.',
                        2000,
                        'FOSS Contributor.',
                        2000
                        ]}
                        speed={25}
                        wrapper='span'
                        repeat={Infinity}
                        className= 'im'
                        />
                        </div>

                </div>
                    <img src={me} className='mypic' />
            </div>
            


          <div className= 'desc'>
            <h1 className='about'>ABOUT:</h1>
          <h3 className='aboutme'>I am currently pursuing my under graduate degree in  Rajalakshmi Engineering College.<br></br>I love programming and learning new things!
          Feel free to get in touch or take a look at<br></br> my past work below.</h3>
          </div>

        <div className = 'project'>
            <h1 className='projhead'>My Projects</h1>
            <div className='blocks'> 
              <div className='elite'>
                  <img src={elite} className="eliteimg"/>
                  <div className='imgcontent'>
                  <h1 className=''style={{paddingTop:'6px'}}>Department Event Website:</h1><br/>
                  <p className=''>Contributed in developing a website
                  for event organised by the club
                  of our Department.</p>
                  <button className="prjlink" onClick={handleweb} target ='_blank'>View Website</button>
                  </div>
                  
              </div>   
              
              <div className='elite'>
                  <img src={wiki} className="wikiimg"/>
                  <div className='imgcontent'>
                    <h1 className=''style={{paddingTop:'2px'}}>Wikipedia API Website:</h1><br/>
                    <p className=''>Developed a Search website in React</p> 
                    <p> using Wikipedia API.</p>
                    <button className="prjlink" onClick={handleclick} target ='_blank'>View Code</button>
                  </div>
               </div>

               <div className='elite'>
                  <img src={mern} className="mernimg"/>
                  <div className='imgcontent'>
                    <h1 className=''style={{paddingTop:'2px'}}>MERN Todo Application:</h1><br/>
                    <p className=''>Developed a todo application using MERN stack </p> 
                    
                    <button className="prjlink" onClick={handlemern} target ='_blank'>View Code</button>
                  </div>
               </div>
               
            </div>
        </div>
       
     
      
      </header>
       
      
      <div className='timeline' id='time'>
      <h1 className='projhead'>My Timeline</h1> 
    <div class="max-w-7xl mx-auto pb-20 pt-20 w-full grid grid-cols-9 px-2">
    
        <div class="col-span-4 w-full h-full ">
            <div class="w-full h-full bg-white shadow-lg rounded-lg p-2 md:pl-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100">
                <h1 class="text-black text-xl font-medium flex justify-center">D.A.V Public School</h1>
                <h1 class="text-black text-xl  font-medium py-2 flex justify-center">High School</h1>
                <p class="text-black sm:text-sm text-xs pt-2 flex justify-center">2006-2019</p>
            </div>
        </div>
        <div class="relative col-span-1 w-full h-full flex justify-center items-center">
            <div class="h-full w-1 bg-[#ff0049]"></div>
            <div class="absolute w-6 h-6 rounded-full bg-[#ff360d] z-10 text-white text-center">1</div>
        </div>
        <div class="col-span-4 w-full h-full"></div>


        
        <div class="col-span-4 w-full h-full"></div>
        <div class="relative col-span-1 w-full h-full flex justify-center items-center">
            <div class="h-full w-1 bg-[#ff0049]"></div>
            <div class="absolute w-6 h-6 rounded-full  bg-[#ff360d] z-10 text-white text-center">2</div>
        </div>
        <div class="col-span-4 w-full h-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100 ">
            <div class="w-full h-full bg-white rounded-lg p-2  shadow-lg md:pl-4">
                <h1 class="text-black text-xl font-medium py-2 flex justify-center">GTA Vidhya Mandir</h1>
                <p class="text-black sm:text-sm text-xs font-medium flex justify-center">11th and 12th</p>
                <p class="text-black sm:text-sm text-xs flex pt-3 justify-center">2019 - 2021</p>
            </div>
        </div>

        
        <div class="col-span-4 w-full h-full ">
            <div class="w-full h-full shadow-lg bg-white rounded-lg p-2 md:pl-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100">
                <h1 class="text-black text-xl font-medium py-2 flex justify-center">Python</h1>
                <p class="text-black sm:text-sm text-xs flex justify-center font-medium">My first Programming Language</p>
                <p class="text-black sm:text-sm text-xs flex pt-3 justify-center">February 2021</p>
            </div>
        </div>
        <div class="relative col-span-1 w-full h-full flex justify-center items-center">
            <div class="h-full w-1 bg-[#ff0049]"></div>
            <div class="absolute w-6 h-6 rounded-full bg-[#ff360d] z-10 text-white text-center">3</div>
        </div>
        <div class="col-span-4 w-full h-full"></div>


        
        <div class="col-span-4 w-full h-full"></div>
        <div class="relative col-span-1 w-full h-full flex justify-center items-center">
            <div class="h-full w-1 bg-[#ff0049]"></div>
            <div class="absolute w-6 h-6 rounded-full  bg-[#ff360d]  text-white text-center">4</div>
        </div>
        <div class="col-span-4 w-full h-full ">
            <div class="overflow-y-hidden w-full h-full bg-white rounded-lg p-2  shadow-lg md:pl-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100">
                <h1 class="text-black text-xl font-medium py-2 flex justify-center">Studied Ethical Hacking</h1>
                <p class="text-black sm:text-xs text-xs font-medium flex justify-center ">Did some machines on HackTheBox</p>
                <p class="text-black sm:text-sm text-xs flex pt-3 justify-center">May 2021</p>
            </div>
        </div>
        
        <div class="col-span-4 w-full h-full ">
            <div class="w-full h-full shadow-lg bg-white rounded-lg p-2 md:pl-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100">
                <h1 class="text-black text-xl font-medium py-2 flex justify-center">Rajalakshmi Engineering College</h1>
                <p class="text-black sm:text-sm text-xs flex justify-center font-medium">Bachelor of Technology - Information Technology</p>
                
                <p class="text-black sm:text-sm text-xs flex pt-3 justify-center">November 2021</p>
            </div>
        </div>
        <div class="relative col-span-1 w-full h-full flex justify-center items-center">
            <div class="h-full w-1 bg-[#ff0049]"></div>
            <div class="absolute w-6 h-6 rounded-full bg-[#ff360d] z-10 text-white text-center">5</div>
        </div>

        <div class="col-span-4 w-full h-full"></div>
        <div class="col-span-4 w-full h-full"></div>
        <div class="relative col-span-1 w-full h-full flex justify-center items-center">
            <div class="h-full w-1 bg-[#ff0049]"></div>
            <div class="absolute w-6 h-6 rounded-full  bg-[#ff360d] z-10 text-white text-center">6</div>
        </div>
        <div class="col-span-4 w-full h-full ">
            <div class="w-full h-full bg-white rounded-lg p-2  shadow-lg md:pl-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100">
                <h1 class="text-black text-xl font-medium py-2 flex justify-center">C - Programming</h1>
                <p class="text-black sm:text-xs text-xs font-medium flex justify-center ">Learnt C programming</p>
                <p class="text-black sm:text-sm text-xs flex pt-3 justify-center">January 2022</p>
            </div>
        </div>
        <div class="col-span-4 w-full h-full ">
            <div class="w-full h-full shadow-lg bg-white rounded-lg p-2 md:pl-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100">
                <h1 class="text-black text-xl font-medium py-2 flex justify-center">Java Programming Language</h1>
                <p class="text-black sm:text-sm text-xs flex justify-center font-medium">Learnt Algorithms and Data Structures</p>
                
                <p class="text-black sm:text-sm text-xs flex pt-3 justify-center">May 2022</p>
            </div>
        </div>
        
        <div class="relative col-span-1 w-full h-full flex justify-center items-center">
            <div class="h-full w-1 bg-[#ff0049]"></div>
            <div class="absolute w-6 h-6 rounded-full bg-[#ff360d] z-10 text-white text-center">7</div>
        </div>


        <div class="col-span-4 w-full h-full"></div>
        <div class="col-span-4 w-full h-full"></div>
        <div class="relative col-span-1 w-full h-full flex justify-center items-center">
            <div class="h-full w-1 bg-[#ff0049]"></div>
            <div class="absolute w-6 h-6 rounded-full  bg-[#ff360d] z-10 text-white text-center">8</div>
        </div>
        <div class="col-span-4 w-full h-full ">
            <div class="w-full h-full bg-white rounded-lg p-2  shadow-lg md:pl-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100">
                <h1 class="text-black text-xl font-medium py-2 flex justify-center">HTML , CSS and JavaScript</h1>
                <p class="text-black sm:text-sm text-xs flex justify-center font-medium">Contributed to DecodersCommunity</p>
                <p class="text-black sm:text-sm text-xs flex pt-3 justify-center">Added two anime characters onto the website</p>
                <p class="text-black sm:text-sm text-xs flex pt-3 justify-center">July 2022</p>
        </div>
        </div>
        
        <div class="col-span-4 w-full h-full ">
            <div class="w-full h-full shadow-lg bg-white rounded-lg p-2 md:pl-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100">
                <h1 class="text-black text-xl font-medium py-2 flex justify-center ">React Framework And Redux</h1>
                <p class="text-black sm:text-sm text-xs flex justify-center font-medium">Created a Search Website in React using Wikipedia API</p>
                
                <p class="text-black sm:text-sm text-xs flex pt-3 justify-center">August 2022</p>
            </div>
        </div>
        <div class="relative col-span-1 w-full h-full flex justify-center items-center">
            <div class="h-full w-1 bg-[#ff0049]"></div>
            <div class="absolute w-6 h-6 rounded-full bg-[#ff360d] z-10 text-white text-center">9</div>
        </div>



        <div class="col-span-4 w-full h-full"></div>
        <div class="col-span-4 w-full h-full"></div>
        <div class="relative col-span-1 w-full h-full flex justify-center items-center">
            <div class="h-full w-1 bg-[#ff0049]"></div>
            <div class="absolute w-6 h-6 rounded-full  bg-[#ff360d] z-10 text-white text-center">10</div>
        </div>
        <div class="col-span-4 w-full h-full ">
            <div class="w-full h-full bg-white rounded-lg p-2  shadow-lg md:pl-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100">
                <h1 class="text-black text-xl font-medium py-2 flex justify-center">Design Summit</h1>
                <p class="text-black sm:text-sm text-xs flex justify-center font-medium">Contributed for developing Department Event Website </p>
                <p class="text-black sm:text-sm text-xs flex pt-3 justify-center">Added two anime characters onto the website</p>
                <p class="text-black sm:text-sm text-xs flex pt-3 justify-center">November 2022</p>
        </div>
        </div>
        <div class="col-span-4 w-full h-full ">
            <div class="w-full h-full shadow-lg bg-white rounded-lg p-2 md:pl-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100">
                <h1 class="text-black text-xl font-medium py-2 flex justify-center ">Innovation'23</h1>
                <p class="text-black sm:text-sm text-xs flex justify-center font-medium">Contributed for developing Hackathon registration website</p>
                
                <p class="text-black sm:text-sm text-xs flex pt-3 justify-center">February 2023</p>
            </div>
        </div>

        <div class="relative col-span-1 w-full h-full flex justify-center items-center">
            <div class="h-full w-1 bg-[#ff0049]"></div>
            <div class="absolute w-6 h-6 rounded-full bg-[#ff360d] z-10 text-white text-center">11</div>
        </div>

        <div class="col-span-4 w-full h-full"></div>
        <div class="col-span-4 w-full h-full"></div>
        <div class="relative col-span-1 w-full h-full flex justify-center items-center">
            <div class="h-full w-1 bg-[#ff0049]"></div>
            <div class="absolute w-6 h-6 rounded-full  bg-[#ff360d] z-10 text-white text-center">12</div>
        </div>
        <div class="col-span-4 w-full h-full ">
            <div class="w-full h-full bg-white rounded-lg p-2  shadow-lg md:pl-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100">
                <h1 class="text-black text-xl font-medium py-2 flex justify-center">Microservice Architecture</h1>
                <p class="text-black sm:text-sm text-xs flex justify-center font-medium">Studied about docker,kubernetes and cloud implementation</p>
                
                <p class="text-black sm:text-sm text-xs flex pt-3 justify-center">February 2023</p>
        </div>
        </div>
        <div class="col-span-4 w-full h-full ">
            <div class="w-full h-full shadow-lg bg-white rounded-lg p-2 md:pl-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100">
                <h1 class="text-black text-xl font-medium py-2 flex justify-center">Amazon Web Services</h1>
                <p class="text-black sm:text-sm text-xs flex justify-center font-medium">Studied for Solutions Architect Associate certification</p>
                
                <p class="text-black sm:text-sm text-xs flex pt-3 justify-center">March 2023</p>
            </div>
        </div>

        <div class="relative col-span-1 w-full h-full flex justify-center items-center">
            <div class="h-full w-1 bg-[#ff0049]"></div>
            <div class="absolute w-6 h-6 rounded-full bg-[#ff360d] z-10 text-white text-center">13</div>
        </div>
    </div>
    
    </div> 


      <footer id= 'foot'> 
        <MDBFooter className='bg-[#000] bg-opacity-70 text-center pt-10 mt-10  text-white '>
      <MDBContainer className='  pb-0'>
        <section className='mb-4 gap-8'>
        <a href='https://github.com/pernelkanic' target="_blank"><MDBBtn outline color="light" floating className='m-1'  role='button'>
           <AiFillGithub />
          </MDBBtn></a>

          

        
         

          <a href='https://www.linkedin.com/in/venkatkrishnan-raghavan-8b3017249/' target="_blank"> <MDBBtn outline color="light" floating className='m-1'  role='button'>
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