import * as React from "react";
import { FaChevronCircleDown } from "react-icons/fa";
import scrollTo from "gatsby-plugin-smoothscroll"


const ScrollDown = () => (
  <p className="scrolldown">
    <button onClick={() => scrollTo('#about')} onTouchEnd={() => scrollTo('#about')} role="link" activeClass="active" className="test1" to="about" smooth={true}>
      <FaChevronCircleDown />
    </button>
  </p>
);

export default ScrollDown;
