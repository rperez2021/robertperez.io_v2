import * as React from 'react'
import SocialLinks from './sociallinks'
import { FaChevronCircleUp } from 'react-icons/fa'
import scrollTo from 'gatsby-plugin-smoothscroll'

const Footer = () => (
  <footer id="footer">
    <div className="row">
      <div className="twelve columns">
        <SocialLinks />

        <ul className="copyright">
          <li>
            Developed and Designed by Roberto Perez with React ⚛️ and Gatsby in{' '}
            {new Date().getFullYear()}
          </li>
        </ul>
      </div>

      <div id="go-top">
        <p className="scrollup">
          <button
            onClick={() => scrollTo('#home')}
            onTouchEnd={() => scrollTo('#home')}
            role="link"
            className="linkstyle scrollup"
          >
            <FaChevronCircleUp />
          </button>
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
