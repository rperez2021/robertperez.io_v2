import * as React from 'react'

import Education from './education.js'
import Work from './work.js'
import Skills from './skills.js'

const Resume = ({ children }) => {
  return (
    <section id="resume">
      <Work />
      <Skills />
      <Education />
    </section>
  )
}
export default Resume
