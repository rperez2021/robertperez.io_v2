import React, {useEffect, useState} from "react";
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Link } from "gatsby"
import { useScrollPosition } from "./scrollPosition";

const Navigation = () => {
   console.log("Hello")
   const [scroll, setScroll] = useState(0);

   useScrollPosition(function setScrollPosition({ currentPosition }) {
      setScroll(currentPosition.y);
      console.log(scroll)
   });



   return (





      <nav id="nav-wrap" className={`nav ${scroll < -10 ? 'shaded' : 'clear'}`}>

         <span className="mobile-btn" href="#nav-wrap" />
         <ul id="nav" className='nav'> 

            <li className="current">
               <Link onClick={() => scrollTo('#home')} tabIndex="0" activeClass="activelinkstyle" className="linkstyle" spy={true} to='#home' smooth={true} duration={500} hashSpy={true}>Home</Link>

            </li>

            <li className="current">
               <Link onClick={() => scrollTo('#about')} tabIndex="0" activeClass="activelinkstyle" className="linkstyle" spy={true} to='#about' smooth={true} duration={500} hashSpy={true}>About</Link>

            </li>

            <li className="current">
               <Link onClick={() => scrollTo('#resume')} tabIndex="0" activeClass="activelinkstyle" className="linkstyle" spy={true} to='#resume' smooth={true} duration={500} hashSpy={true}>Resume</Link>

            </li>

            <li className="current">
               <Link onClick={() => scrollTo('#portfolio')} tabIndex="0" activeClass="activelinkstyle" className="linkstyle" spy={true} to='#portfolio' smooth={true} duration={500} hashSpy={true}>Portfolio</Link>

            </li>


         </ul>

      </nav>
   )
}

export default Navigation;

