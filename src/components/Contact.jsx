import React from 'react';
import '../styles/contact.scss'
import { SocialIcon } from 'react-social-icons';

const Contact = () => {
  return (
    <>
    <div className='form'>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Contact Number</label>
        <input type="number" class="form-control" id="exampleFormControlInput1" placeholder=""/>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Message for Us</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button type="button" class="btn btn-success">Submit</button>
      </div>
      <br/><br/><br/><br/>
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

export default Contact;
