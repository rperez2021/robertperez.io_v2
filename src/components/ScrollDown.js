import * as React from "react";
import { FaChevronCircleDown } from "react-icons/fa";
import scrollTo from "gatsby-plugin-smoothscroll"


const ScrollDown = () => (
  <p className="scrolldown">
    <a onClick={() => scrollTo('#about')} activeClass="active" className="test1" to="about">
      <FaChevronCircleDown />
    </a>
  </p>
);

export default ScrollDown;
