import React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
  return(
    <div>
      <h1>About Me</h1>
      <p>Here is something about me ...</p>
      <p>Need to <Link to="/contact">contact me.</Link></p>
    </div>
  )  
}

export default AboutPage