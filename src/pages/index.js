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
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p> */}
  </Layout>
)

export default IndexPage
