
import React from 'react'
import {Link} from 'react-router-dom'
import Awais from './Deveeloper/awais.jpg'
import Farooq from './Deveeloper/farooq.jpg'
import Zafar from './Deveeloper/zafar.jpg'
import './Deveeloper/style.css'
const Developers = () => {
    return (
      <>
     
      <section class="main">
      <h1 className='headingB'>Our Team</h1>
       <div className="mainB">

     
      <div class="profile-card">
        <div class="image">
        <img src={Farooq} alt="" class="profile-pic"/>
        </div>
        <div class="text">
        <h2>FAROOQ NIAZI</h2>
        <span>Web Designer</span>
        </div>
       
          <div class="social-icons">
            <div class="icon">
              <Link id="a1" href="/"><i class="fab fa-hackerrank"></i></Link>
            </div>
            
            <div class="icon">
              <Link id="a3" href="#"><i class="fab fa-github"></i></Link>
            </div>
            <div class="icon">
              <Link id="a2" href="#"><i class="fab fa-linkedin"></i></Link>
              </div>
            </div>
            <div class="skills">
            <h6>Skills</h6>
            <ul>
              <li>UI / UX</li>
              <li>Front End Design</li>
              <li>CSS</li>
              <li>React</li>
              <li>Figma</li>
              <li>NFTs</li>
              <li>WEB 3.0</li>
            </ul>
            </div>
        </div>

        <div class="profile-card">
        <div class="image">
        <img src={Awais} alt="" class="profile-pic"/>
        </div>
        <div class="text">
        <h2>AWAIS KHAN</h2>
        <span>MERN Stack Developer </span>
        </div>
       
          <div class="social-icons">
            <div class="icon">
              <Link id="a1" href="/"><i class="fab fa-hackerrank"></i></Link>
            </div>
            
            <div class="icon">
              <Link id="a3" href="#"><i class="fab fa-github"></i></Link>
            </div>
            <div class="icon">
              <Link id="a2" href="#"><i class="fab fa-linkedin"></i></Link>
              </div>
            </div>
            <div class="skills">
            <h6>Skills</h6>
            <ul>
              <li>MONGO DB</li>
              <li>REACT</li>
              <li>EXPRESS</li>
              <li>NODE JS</li>
              <li>JAVA</li>
              <li>JAVASCRIPT</li>
              <li>C#</li>
            </ul>
            </div>
        </div>

        <div class="profile-card">
        <div class="image">
        <img src={Zafar} alt="" class="profile-pic"/>
        </div>
        <div class="text">
        <h2>ZAFAR KHAN</h2>
        <span>Developer & Designer</span>
        </div>
       
          <div class="social-icons">
            <div class="icon">
              <Link id="a1" href="/"><i class="fab fa-hackerrank"></i></Link>
            </div>
            
            <div class="icon">
              <Link id="a3" href="#"><i class="fab fa-github"></i></Link>
            </div>
            <div class="icon">
              <Link id="a2" href="#"><i class="fab fa-linkedin"></i></Link>
              </div>
            </div>
            <div class="skills">
            <h6 className='h6'>Skills</h6>
            <ul>
              <li>UI / UX</li>
              <li>Front End </li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node</li>
            </ul>
            </div>
        </div>
        </div>
      </section>
      
      </>
      );
}

export default Developers