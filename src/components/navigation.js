import React, { useState } from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { useScrollPosition } from './scrollPosition'

const Navigation = () => {
  const [scroll, setScroll] = useState(0)
  useScrollPosition(function setScrollPosition({ currentPosition }) {
    setScroll(currentPosition.y)
  })

  return (
    <nav id="nav-wrap" className={`nav ${scroll < -10 ? 'shaded' : 'clear'}`}>
      <span className="mobile-btn" href="#nav-wrap" />
      <ul id="nav" className="nav">
        <li className="current">
          <button
            onClick={() => scrollTo('#home')}
            onTouchEnd={() => scrollTo('#home')}
            tabIndex="0"
            className="linkstyle"
          >
            Home
          </button>
        </li>

        <li className="current">
          <button
            onClick={() => scrollTo('#about')}
            onTouchEnd={() => scrollTo('#about')}
            tabIndex="0"
            className="linkstyle"
            to="#about"
          >
            About
          </button>
        </li>

        <li className="current">
          <button
            onClick={() => scrollTo('#resume')}
            onTouchEnd={() => scrollTo('#resume')}
            tabIndex="0"
            className="linkstyle"
            to="#resume"
          >
            Resume
          </button>
        </li>

        <li className="current">
          <button
            onClick={() => scrollTo('#portfolio')}
            onTouchEnd={() => scrollTo('#portfolio')}
            tabIndex="0"
            className="linkstyle"
            to="#portfolio"
          >
            Portfolio
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
