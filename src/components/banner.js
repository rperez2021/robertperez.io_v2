import * as React from 'react'
import SocialLinks from './sociallinks'

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">Hi, I&#39;m Roberto Perez.</h1>
      <h3>
        I&#39;m a San Diego based <span>web developer, </span>
        <span>freelancer, husband </span> and <span> dad</span> who loves to
        create great software and design amazing sites. Scroll down and learn
        more
        <a className="smoothscroll" href="#about">
          {' '}
          about me
        </a>
        .
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
)

export default Banner
