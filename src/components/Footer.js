import * as React from "react";
import SocialLinks from "./sociallinks";
import { FaChevronCircleUp } from "react-icons/fa";
import scrollTo from "gatsby-plugin-smoothscroll"

const Footer = () => (
  <footer id="footer">
    <div className="row">
      <div className="twelve columns">
        <SocialLinks />

        <ul className="copyright">
         
          <li>
            Design by{" "}
            <a title="Styleshout" href="http://www.styleshout.com/">
              Styleshout
            </a>
          </li>
          <li>
            Developed in React ⚛️ by{" "}
            <a href="https://robertoperez.io">Roberto Perez</a>
          </li>
        </ul>
      </div>

      <div id="go-top">
      <a onClick={() => scrollTo('#home')} activeClass="active" className="linkstyle" to="home" spy={true} smooth={true} duration={500} >
      <FaChevronCircleUp />
          </a>
      </div>
    </div>
  </footer>
);

export default Footer;
