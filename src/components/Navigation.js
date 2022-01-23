import * as React from "react";
import { Link } from "gatsby";
import scrollTo from 'gatsby-plugin-smoothscroll';
import Header from "./header";

const Navigation = () => (
 
      <nav id="nav-wrap">
      <a className="mobile-btn" href="#nav-wrap"/>
        <ul id="nav" className="nav">

        <li className="current">
         
        <a onClick={() => scrollTo('#home')} activeClass="activelinkstyle" className="linkstyle" to="home" spy={true} smooth={true} duration={500} hashSpy={true}>
           Home
          </a>
       </li>

        <li className="current">
        <a onClick={() => scrollTo('#about')} activeClass="activelinkstyle" className="linkstyle" to="about" spy={true} smooth={true} duration={500} hashSpy={true}>
           About
        </a>
       </li>

       <li className="current">
        <a onClick={() => scrollTo('#resume')} activeClass="activelinkstyle" className="linkstyle" to="resume" spy={true} smooth={true} duration={500} hashSpy={true}>
           Resume
        </a>
       </li>

        <li className="current">
        <a onClick={() => scrollTo('#portfolio')} activeClass="activelinkstyle" className="linkstyle" to="portfolio" spy={true} smooth={true} duration={500} hashSpy={true}>
           Portfolio
        </a>
       </li>


        </ul>
      </nav>
    )


export default Navigation;
