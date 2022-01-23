import * as React from "react";

import Education from "./education";
import Work from "./work";
import Skills from "./skills";

const Resume = ({ children }) => {
  return (

  <section id="resume">
    <Work />
    <Skills />
    <Education />
  </section>
  )
}
;

export default Resume;
