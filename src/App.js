import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from './components/Contact';
import Home from "./components/Home"
import Navbar from './components/Navbar';
import Services from './components/Services'
import Testimonials from './components/Testimonials';


const App = () => {
  return (
    <>
     
    <Navbar/>
    <Router>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Personal-Portfolio" element={<Home />}/>
       <Route path="/Services" element={<Services />}/>
       <Route path="/Contact" element={<Contact />}/>
       <Route path="/Testimonials" element={<Testimonials />}/>
       </Routes>
    </Router>
    </>
    
  )
}

export default App
