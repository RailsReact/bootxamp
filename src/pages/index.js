import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'

const IndexPage = () => {
  return(
    <div>
      <Layout>
        <h1>Hello.</h1>
        <h2>I'm Excavator, a ruby-react developer living in fuzzy Moscow</h2>
        <p>Navigation to?<Link to="/contact">Contact me.</Link></p>
      </Layout>
    </div>
  )
}

export default IndexPage
