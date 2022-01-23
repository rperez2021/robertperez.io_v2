import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Navigation from "./navigation"
import Banner from "./banner"
import ScrollDown from "./scrolldown"
import About from "./about"


const Header = ({ siteTitle }) => (
  <header id="home">
    
          <Navigation></Navigation>
          <Banner></Banner>
          <ScrollDown></ScrollDown>
   
    
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
