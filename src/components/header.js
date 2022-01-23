import * as React from "react"
import PropTypes from "prop-types"
import Navigation from "../components/navigation.js"
import Banner from "./banner.js"
import ScrollDown from "./scrolldown.js"



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
