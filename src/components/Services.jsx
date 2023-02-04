import React from 'react';
import { SocialIcon } from 'react-social-icons';

import '../styles/services.scss'

import frontend from '../assets/FrontendDevelopment.jpeg'
import backend from '../assets/backendDevelopment.jpeg'
import fullstack from '../assets/FullStack.webp'
import equity from '../assets/EQUITY.jpeg'
import mutualfund from '../assets/MF IMAGE.jpeg'
import safer from '../assets/PIGGY.jpeg'


const Services = () => {
  return (
    <>
    
    <div className="heading">
        <h1>Our Features & Services</h1>
        <p>Choose from the best services in market!</p>
    </div>
    
    
    <section id="price-section">
    <div class="container">
        
        <div class="row pt-5">
            <div class="col-lg-4 pb-5 pb-lg-0">
                <div class="wrap-price">
                    <div class="price-innerdetail text-center">
                        
                        <img src={frontend} alt="profile" /><br/><br/><br/>
                        <h5 style={{color:"white"}}>Front-End Development</h5><br/><br/>
                        
                        <p>Get complete design for your Website.</p>
                        <p>Free Service for first 15 days.</p>
                        <p>No fixed cost. Pay as per requirements!</p>
                        <a href="https://wa.link/pn73nx" class="btn btn-secondary mt-5">Contact Now</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 pb-5 pb-lg-0">
                <div class="wrap-price center-wrap">
                    <div class="price-innerdetail text-center">
                    <img src={backend} alt="profile" /><br/><br/>
                        <h5 style={{color:"white"}}>Back-End Development</h5><br/><br/>
                        <p>Get complete Backend for your Website.</p>
                        <p>Free Service for first 15 days.</p>
                        <p>No fixed cost. Pay as per requirements!</p>
                        <a href="https://wa.link/83rr47" class="btn btn-secondary mt-5">Contact Now</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 pb-5 pb-lg-0">
                <div class="wrap-price">
                    <div class="price-innerdetail text-center">
                    <img src={fullstack} alt="profile" /><br/><br/>
                        <h5 style={{color:"white"}}>Full-Stack Development</h5><br/><br/>

                        <p>Get fully deployed Website for your organization.</p>
                        <p>Free Service for first 15 days.</p>
                        <p>No fixed cost. Pay as per requirements!</p>
                        <a href="https://wa.link/xdpa4u" class="btn btn-secondary mt-5">Contact Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section id="price-section">
    <div class="container">
        
        <div class="row pt-5">
            <div class="col-lg-4 pb-5 pb-lg-0">
                <div class="wrap-price">
                    <div class="price-innerdetail text-center">
                        
                        <div className="photu"><img src={equity} alt="profile" /></div><br/><br/>
                        <h5 style={{color:"white"}}>Equity Investments</h5><br/><br/>
                        <p class="prices">RS 1000/ Month</p>
                        <p>Get weekly and monthly Stock Recommendations.</p>
                        <p>Know about the news and sentiments of market.</p>
                        <p>Get the daily analysis of the market!</p>
                        <a href="https://wa.link/1pxfxv" class="btn btn-secondary mt-5">Contact Now</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 pb-5 pb-lg-0">
                <div class="wrap-price center-wrap">
                    <div class="price-innerdetail text-center">
                    <img src={mutualfund} alt="profile" /><br/><br/><br/>
                        <h5 style={{color:"white"}}>Mutual Fund Investments</h5><br/><br/>
                        <p class="prices">RS 500</p>
                        <p>Get 5 Mutual Fund Recommendation based on your profile. </p>
                        <p>Get the market news and sentiments.</p>
                        <p>Get the investing in and getting out strategy.</p>
                        <a href="https://wa.link/rj6cgz" class="btn btn-secondary mt-5">Contact Now</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 pb-5 pb-lg-0">
                <div class="wrap-price">
                    <div class="price-innerdetail text-center">
                    <img src={safer} alt="profile" /><br/><br/><br/>
                        <h5 style={{color:"white"}}>Safer Investments</h5><br/><br/>

                        <p class="prices">RS 300</p>
                        <p>Get list of banks with high FD returns.</p>
                        <p>Get 3 Liquid fund recommendation to increase returns.</p>
                        <p>Get 3 alternate to FD to increase your returns.</p>
                        <a href="https://wa.link/e8f4cl" class="btn btn-secondary mt-5">Contact Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<br/>
<div className="footer">
<footer>
     <SocialIcon url="https://www.linkedin.com/in/vaibhav-dubey-3814a7184/" />&nbsp;&nbsp;&nbsp;&nbsp;
     <SocialIcon url="https://www.youtube.com/channel/UCltUAcF3lrhGnqjqe81QE_w" />&nbsp;&nbsp;&nbsp;&nbsp;
     <SocialIcon url="https://github.com/vaibhavvdubeyy" />&nbsp;&nbsp;&nbsp;&nbsp;
     <SocialIcon url="https://www.instagram.com/vaibhavv_dubeyy/" />&nbsp;&nbsp;&nbsp;&nbsp;
</footer>
</div>
    </>
    
  );
}

export default Services;
