import React,{useState} from 'react'
import './home.css'
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';


const Home = () => {

  const[active,setActive]=useState("nav")

  const toggle =()=>{
    if(active === "nav"){
      setActive("nav nav__active")
    }else{
      setActive("nav")
    }
  }
  return (
    <>


    {/* for mobile */}

    <div className="topnav">
        <a href="#lo" className="act"></a>
        {/* Navigation links (hidden by default) */}
        <div  className={active}>
          <a href="#home">Home</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <a href="#about">Portfolio</a>
        </div>
        {/* "Hamburger menu" / "Bar icon" to toggle the navigation links */}
        <a className="icon" onClick={toggle} >
          <i className="fa fa-bars" />
        </a>
      </div>

    {/* end of mobile */}

   
    
    <section className='Top' id='home'>
        <div className='navlink'>
            <nav className='navs'>
            
            <ul><li ><a href="#home">HOME</a></li>
            {/* <img className='home' src="images/hero/home.svg" alt="" /> */}
            <li><a href="#portfolio">PORTFOLIO</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#contact">CONTACT</a></li>
            
            {/* <li className='sample'><a href=""></a></li> */}
            
            </ul>
            </nav>
            <div className='hero'>
                <h1>I,m Shubham Ahirrao</h1>
                <p>Webdesigner and Webdeveloper</p>
                <div className='myphoto'>
            <img src="images/mainphoto.png" alt="" />
            </div>
            </div>

            
            
            


            

            
            
        </div>
    </section>
    <section className='portfolio' id='portfolio'>
    <div>
    <div className='portfolio-text'><h3>My Portfolio</h3></div>
    <div className='row'>
        <div className="portfolio-images">
            
          <img src="images/portfolios/p1.jpg" alt="" className="image"  />
          <div className="middle">
            <div className="text">John Doe</div>
          </div>
        </div>
        <div className="portfolio-images">
            
          <img src="images/portfolios/p1.jpg" alt="" className="image"  />
          <div className="middle">
            <div className="text">John Doe</div>
          </div>
        </div>
        
        
        </div>
        <div className='row'>
        <div className="portfolio-images">
            
          <img src="images/portfolios/p1.jpg" alt="" className="image"  />
          <div className="middle">
            <div className="text">John Doe</div>
          </div>
        </div>
        <div className="portfolio-images">
            
          <img src="images/portfolios/p1.jpg" alt="" className="image"  />
          <div className="middle">
            <div className="text">John Doe</div>
          </div>
        </div>
        
        
        </div>
        
        
        
      </div>
    </section>

    <section className='about' id='about'>
        <div className='container'>
            <div className='aboutflex'>
            <div className='aboutme-img'><img src="images/about/aboutme.jpg" alt="" /></div>
            <div className='aboutme-title'><h3>About</h3>
            <p>As a web developer with a background in design, I have a unique perspective on how to create<br/> websites that are both visually appealing and highly functional. I have a strong foundation in HTML,<br/> CSS, and JavaScript, and have experience with popular frameworks such as react.js. I am confident<br/> in my ability to translate your vision into a finished product that exceeds your expectations.</p>
            <div className='resume'><li ><a href="">Download My Resume</a></li></div>
            <div className='skill'><h4>My Skills</h4></div>
            <div>
            <p className='skill_language'>HTML</p>
<div class="graph">
  <div class="skills html">90%</div>
</div>

<p className='skill_language'>CSS</p>
<div class="graph">
  <div class="skills css">80%</div>
</div>

<p className='skill_language'>JavaScript</p>
<div class="graph">
  <div class="skills js">65%</div>
</div>

<p className='skill_language'>React</p>
<div class="graph">
  <div class="skills php">60%</div>
</div>
            </div>
            </div>
            
            </div>
            
        </div>
    </section>
    <section className='contact' id='contact'>
        <div className='container'>
        <div className='contact-title'><h3>CONTACT ME</h3>
        <div className='line'></div>
        <div className='info'>
        <img className='envelop1' src="images/contact/address.svg" alt="ss" />
            <div>
        <p>Nashik, Maharashtra, India</p>
        
        </div>
         <img className='envelop1' src="images/contact/phone.svg" alt="ss" />
        <div> <p>Phone: +91 8928669994</p></div>
        
        <img className='envelop1' src="images/contact/envelop.svg" alt="ss" />
        <div><p>Email: shubhamahirrao4444@gmail.com</p>
        </div>
        </div></div>
        </div>
    </section>
    <section className='connect'>
        <div className='container'>
            <div className='connect-title'><h3>Connect with me</h3></div>
        </div>
        <div className='connect-input'>
        <div><input type="text" /></div>
        <div><input type="text" /></div>
        <button className='but'>Submit</button>
        </div>
    </section>
    </>
  )
}

export default Home