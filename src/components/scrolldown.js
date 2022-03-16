import * as React from "react";
import { FaChevronCircleDown } from "react-icons/fa";
import scrollTo from "gatsby-plugin-smoothscroll"


const ScrollDown = () => (
  <p className="scrolldown">
    <button onClick={() => scrollTo('#about')} onTouchEnd={() => scrollTo('#about')} role="link" className="test1">
      <FaChevronCircleDown />
    </button>
  </p>
);

export default ScrollDown;
