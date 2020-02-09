import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'

const AboutPage = () => {
  return(
    <div>
      <Header />
      <h1>About Me</h1>
      <p>Here is something about me ...</p>
      <p>Need to <Link to="/contact">contact me.</Link></p>
      <Footer />
    </div>
  )  
}

export default AboutPage