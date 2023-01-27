import React from 'react'
import {motion} from "framer-motion"
import profile from '../assets/PSP.jpg'

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
        <a href='#'><button type="button" class="btn btn-primary">Download CV</button></a>
        
    </div>
    
 
    
   
    </div>
    </div>
    <br/><br/><br/>
    <hr/>
    <div className='timeline'>
        <h1>Experience</h1>
    <VerticalTimeline className='timeline'>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="Nov 2022 - present"
    
    
    
  >
    <h3 className="vertical-timeline-element-title">Full Stack Developer & Cloud Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Larsen & Toubro Ltd, Vadodara, India</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Feb 2022 - May 2022"
    
    
  >
    <h3 className="vertical-timeline-element-title">Full Stack Java Developer Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">Wipro Ltd, Pune, India</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Aug 2020 - Oct 2020"
    
   
  >
    <h3 className="vertical-timeline-element-title">SEO Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">TNC Aviation Ltd, Delhi, India</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
  
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Jan 2020 - May 2020"
    
  >
    <h3 className="vertical-timeline-element-title">ML Developer Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">SkyFi Labs Inc, Bangalore, India</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  
</VerticalTimeline>
</div>
<br/><br/><br/>
    <hr/>
<div className="footer">  
<footer>
 
</footer>
</div>  
    
    </>
  )
}

export default Home
