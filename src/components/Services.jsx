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
                        
                        <img src={frontend} alt="profile" /><br/><br/>
                        <h5>Front-End Development</h5>
                        <p class="prices">RS 5000</p>
                        <div class="detail-pricing">
                            <span class="float-left"> <i class="bi bi-check2-circle"></i> Photoshoot duration </span>
                            <span class="float-right">4 Hours</span>
                        </div>
                        <div class="detail-pricing">
                            <span class="float-left"> <i class="bi bi-check2-circle"></i> Number photo</span>
                            <span class="float-right">50 - 200</span>
                        </div>
                        <div class="detail-pricing">
                            <span class="float-left"> <i class="bi bi-check2-circle"></i> Consultation</span>
                            <span class="float-right">Style</span>
                        </div>
                        <a href="#" class="btn btn-secondary mt-5">Buy Now</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 pb-5 pb-lg-0">
                <div class="wrap-price center-wrap">
                    <div class="price-innerdetail text-center">
                    <img src={backend} alt="profile" /><br/><br/>
                        <h5>Back-End Development</h5>
                        <p class="prices">RS 8000</p>
                        <div class="detail-pricing">
                            <span class="float-left"> <i class="bi bi-check2-circle"></i> Photoshoot duration </span>
                            <span class="float-right">4 Hours</span>
                        </div>
                        <div class="detail-pricing">
                            <span class="float-left"> <i class="bi bi-check2-circle"></i> Number photo</span>
                            <span class="float-right">50 - 200</span>
                        </div>
                        <div class="detail-pricing">
                            <span class="float-left"> <i class="bi bi-check2-circle"></i> Consultation</span>
                            <span class="float-right">Style</span>
                        </div>
                        <a href="#" class="btn btn-secondary mt-5">Buy Now</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 pb-5 pb-lg-0">
                <div class="wrap-price">
                    <div class="price-innerdetail text-center">
                    <img src={fullstack} alt="profile" /><br/><br/>
                        <h5>Full-Stack Development</h5>

                        <p class="prices">RS 12000</p>
                        <div class="detail-pricing">
                            <span class="float-left"> <i class="bi bi-check2-circle"></i> Photoshoot duration </span>
                            <span class="float-right">4 Hours</span>
                        </div>
                        <div class="detail-pricing">
                            <span class="float-left"> <i class="bi bi-check2-circle"></i> Number photo</span>
                            <span class="float-right">50 - 200</span>
                        </div>
                        <div class="detail-pricing">
                            <span class="float-left"> <i class="bi bi-check2-circle"></i> Consultation</span>
                            <span class="float-right">Style</span>
                        </div>
                        <a href="#" class="btn btn-secondary mt-5">Buy Now</a>
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
                        <h5>Equity Investments</h5>
                        <p class="prices">RS 1000/ Month</p>
                        <div class="detail-pricing">
                            <span class="float-left"> <i class="bi bi-check2-circle"></i> Photoshoot duration </span>
                            <span class="float-right">4 Hours</span>
                        </div>
                        <div class="detail-pricing">
                            <span class="float-left"> <i class="bi bi-check2-circle"></i> Number photo</span>
                            <span class="float-right">50 - 200</span>
                        </div>
                        <div class="detail-pricing">
                            <span class="float-left"> <i class="bi bi-check2-circle"></i> Consultation</span>
                            <span class="float-right">Style</span>
                        </div>
                        <a href="#" class="btn btn-secondary mt-5">Buy Now</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 pb-5 pb-lg-0">
                <div class="wrap-price center-wrap">
                    <div class="price-innerdetail text-center">
                    <img src={mutualfund} alt="profile" /><br/><br/>
                        <h5>Mutual Fund Investments</h5>
                        <p class="prices">RS 500/ Month</p>
                        <div class="detail-pricing">
                            <span class="float-left"> <i class="bi bi-check2-circle"></i> Photoshoot duration </span>
                            <span class="float-right">4 Hours</span>
                        </div>
                        <div class="detail-pricing">
                            <span class="float-left"> <i class="bi bi-check2-circle"></i> Number photo</span>
                            <span class="float-right">50 - 200</span>
                        </div>
                        <div class="detail-pricing">
                            <span class="float-left"> <i class="bi bi-check2-circle"></i> Consultation</span>
                            <span class="float-right">Style</span>
                        </div>
                        <a href="#" class="btn btn-secondary mt-5">Buy Now</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 pb-5 pb-lg-0">
                <div class="wrap-price">
                    <div class="price-innerdetail text-center">
                    <img src={safer} alt="profile" /><br/><br/>
                        <h5>Safer Investments</h5>

                        <p class="prices">RS 300/ Month</p>
                        <div class="detail-pricing">
                            <span class="float-left"> <i class="bi bi-check2-circle"></i> Photoshoot duration </span>
                            <span class="float-right">4 Hours</span>
                        </div>
                        <div class="detail-pricing">
                            <span class="float-left"> <i class="bi bi-check2-circle"></i> Number photo</span>
                            <span class="float-right">50 - 200</span>
                        </div>
                        <div class="detail-pricing">
                            <span class="float-left"> <i class="bi bi-check2-circle"></i> Consultation</span>
                            <span class="float-right">Style</span>
                        </div>
                        <a href="#" class="btn btn-secondary mt-5">Buy Now</a>
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
