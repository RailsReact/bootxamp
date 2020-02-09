import React from "react"
import { Link } from "gatsby"
import Header from '../components/header'
import Footer from '../components/footer'

const IndexPage = () => {
  return(
    <div>
      <Header />
      <h1>Hello.</h1>
      <h2>I'm Excavator, a ruby-react developer living in fuzzy Moscow</h2>
      <p>Navigation to?<Link to="/contact">Contact me.</Link></p>
      <Footer />
    </div>
  )
}

export default IndexPage
