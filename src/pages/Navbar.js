import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
const Navbar = () => {
    
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)
	
	const [oldSticky, NewSticky] = useState("navbar navbar-expand-lg fixed-top navbar-custom sticky");
	window.onscroll = () =>{
		let temp;
		let top = window.scrollY;
		if (top > 100) {
			temp = "navbar navbar-expand-lg fixed-top navbar-custom sticky";
		}
		else
		{
			temp = "navbar navbar-expand-lg fixed-top navbar-custom ";
		}
		return NewSticky(temp);
	}

  return (
    <>
			<nav className={oldSticky}>
		    <div className="container">
		    	<Link className="navbar-brand logo st text-uppercase" to="home">Denny</Link>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: 'black' }} />)
                        : (<FaBars size={30} style={{ color: 'black' }} />)}
                </div>
                    <ul className={click ? "navbar-nav active ml-auto " : "navbar-nav ml-auto"}>
			            <li className="nav-item">
			                <Link spy={true}  className='nav-link' smooth={true} offset={-100} duration={500} onClick={closeMenu} to="home">Home</Link>
			            </li>
			            <li className="nav-item">
			                <Link spy={true} className='nav-link' smooth={true} offset={-100} duration={500} onClick={closeMenu} to="about">About</Link>
			            </li>
			            <li className="nav-item">
			                <Link spy={true} className='nav-link' smooth={true} offset={-100} duration={500} onClick={closeMenu} to="experience">Experience</Link>
			            </li>
			            <li className="nav-item">
			                <Link spy={true} className='nav-link' smooth={true} offset={-100} duration={500} onClick={closeMenu} to="services">Services</Link>
			            </li>
			            <li className="nav-item">
			                <Link spy={true} className='nav-link' smooth={true} offset={-100} duration={500} onClick={closeMenu} to="testimonial">Clients</Link>
			            </li>
			            <li className="nav-item">
			                <Link spy={true} className='nav-link' smooth={true} offset={-100} duration={500} onClick={closeMenu} to="portfolio">Work</Link>
			            </li>
			            <li className="nav-item">
			                <Link spy={true} className='nav-link' smooth={true} offset={-100} duration={500} onClick={closeMenu} to="blog">Blog</Link>
			            </li>
			            <li className="nav-item">
			                <Link spy={true} className='nav-link' smooth={true} offset={-100} duration={500} onClick={closeMenu} to="contact">Contact</Link>
			            </li>
			        </ul>
			    </div>
		</nav>
    </>
  ) 
}

export default Navbar
