import * as React from "react"



import Layout from "../components/layout"
import About from "../components/about"
import Seo from "../components/seo"
import Resume from "../components/resume"
import Portfolio from "../components/portfolio"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
  
    <About />
    <Resume/>
    <Portfolio/>
    <Footer/>

  </Layout>
)

export default IndexPage
