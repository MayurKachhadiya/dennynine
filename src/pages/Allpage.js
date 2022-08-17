import React from 'react';
import Home from './Home';
import About from './About';
import Experience from './Experience';
import Services from './Services';
import Client from './Client';
import Navbar from './Navbar';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';
const Allpage = () => {
  return (
    <>
        
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Services/>
      <Client/>
      <Portfolio/>
      <Blog/>
      <Contact/>
      <Footer/>
      
    </>
  )
}

export default Allpage;