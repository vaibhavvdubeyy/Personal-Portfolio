import React from 'react'

const Header = () => {
  return (
    
    <nav>
        <NavContent/>
    </nav>
    
  )
}

const NavContent =()=>(
    <>
    <h2>Vaibhav.</h2>
    <div>
        <a href='#home'>Home</a>
        <a href='#home'>Services</a>
        <a href='#home'>Testimonials</a>
        <a href='#home'>Contact</a>
    </div>
    <a href='mailto:vaibhavd1422@gmail.com'>
        <button>Email</button>
    </a>
    </>

)
export default Header
