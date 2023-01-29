import React from 'react'
import {motion} from "framer-motion"
import profile from '../assets/PSP.png'

import { SocialIcon } from 'react-social-icons';
import '../styles/home.scss'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';



const Home = () => {
  return (
    <>
    <div className="background">
    <div id="home">
        <section>
            <div>
                <motion.h1 initial={{
                    x: "-100%",
                    opacity:0,

                }}
                whileInView={{
                    x:0,
                    opacity:1,
                }}>
                <motion.h1 style={{color:"green" ,paddingLeft:"30px" ,paddingTop:"50px"}}>
                    Hi, I am <br/> Vaibhav Dubey
                </motion.h1>
             </motion.h1>   

            </div>
        </section>
      
    </div>
    <div className='block'>
    <div className='photo'>
        <img src={profile} alt="profile" />
    
    </div>
    <div className="word">
        <h1>Get the best Tech and Finance related Services. <br/><br/> From Development to Financial Planning <br/>All at ONE place!</h1>
        <br />
        <a href='https://docs.google.com/document/d/1C1zDWVlaVZruWZRgj0pcy9rnqOvAchICHK1jn6ExQIk/edit?usp=share_link'><button type="button" class="btn btn-primary">Download CV</button></a>
        
    </div>
    
 
    
   
    </div>
    </div>
    <br/><br/>
    <hr/>
    <div className='timeline'>
        <h1>Experience</h1><br/>
    <VerticalTimeline className='timeline'>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="Nov 2022 - present"
    
    
    
  >
    <h3 className="vertical-timeline-element-title">Full Stack Developer & Cloud Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Larsen & Toubro Ltd, Vadodara, India</h4>
    <p>Handling Cloud Services, Data Administration, Kubernetes Services, Docket, Data Migration.
       Made the company’s Asset Management Website from scratch.
       Technologies used: Microsoft Azure, Python, React, Django, VSCode, DBMS, HTML, CSS, JavaScript, Node.js
    </p>
   
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Feb 2022 - May 2022"
    
    
  >
    <h3 className="vertical-timeline-element-title">Full Stack Java Developer Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">Wipro Ltd, Pune, India</h4>
    <p>
    Worked on a project for Online Voting System, designed the Login Page and implemented User Authentication.
    Technologies used: Java, MySQL, HTML, CSS, JavaScript, SpringBoot
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Aug 2020 - Oct 2020"
    
   
  >
    <h3 className="vertical-timeline-element-title">SEO Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">TNC Aviation Ltd, Delhi, India</h4>
    <p>
      Worked on the keywords to rank the website on all the browsers.
      Supported the team in managing images and tags and improving the layout of the website.
    </p>
  </VerticalTimelineElement>
  
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Jan 2020 - May 2020"
    
  >
    <h3 className="vertical-timeline-element-title">ML Developer Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">SkyFi Labs Inc, Bangalore, India</h4>
    <p>
    Worked on the project of House Price Prediction & Stock Price Prediction using Linear Regression Models and Support Vector Classifier
    Added support on other projects where I modified and implemented Machine Learning Algorithms
    Technologies Used: Python, Machine Learning Algorithms, Linear Regression, Support Vector Classifier, Anaconda Navigator

    </p>
  </VerticalTimelineElement>
  
</VerticalTimeline>
</div>
<br/><br/><br/>
    <hr/>
<div className="footer">  

<footer>
     <SocialIcon url="https://www.linkedin.com/in/vaibhav-dubey-3814a7184/" />&nbsp;&nbsp;&nbsp;&nbsp;
     <SocialIcon url="https://www.youtube.com/channel/UCltUAcF3lrhGnqjqe81QE_w" />&nbsp;&nbsp;&nbsp;&nbsp;
     <SocialIcon url="https://github.com/vaibhavvdubeyy" />&nbsp;&nbsp;&nbsp;&nbsp;
     <SocialIcon url="https://www.instagram.com/vaibhavv_dubeyy/" />&nbsp;&nbsp;&nbsp;&nbsp;
</footer>
</div>  
    
    </>
  )
}

export default Home
