import * as React from 'react'
import {
  FaMedium,
  FaGithub,
  FaEnvelope,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa'

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://www.linkedin.com/in/roberto-perez-sd/">
        <FaLinkedin />
      </a>
    </li>
    <li>
      <a href="https://github.com/rperez2021">
        <FaGithub />
      </a>
    </li>

    <li>
      <a href="https://twitter.com/robdevelops">
        <FaTwitter />
      </a>
    </li>

    <li>
      <a href="https://www.instagram.com/rpeereez/">
        <FaInstagram />
      </a>
    </li>

    <li>
      <a href="https://medium.com/@rob.perez.flores">
        <FaMedium />
      </a>
    </li>

    <li>
      <a href="mailto:rob.perez.flores@gmail.com">
        <FaEnvelope />
      </a>
    </li>
  </ul>
)

export default SocialLinks
