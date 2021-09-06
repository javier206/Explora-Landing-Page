import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Places from "../components/Places"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Places heading="Explora Nicaragua. Tierra de lagos y volcanes"/>
  </Layout>
)

export default IndexPage
