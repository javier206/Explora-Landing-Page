import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Places from "../components/Places"
import Travelers from "../components/Travelers"
import Stats from "../components/Stats"
import Email from "../components/Email"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Places heading="Explora Nicaragua. Tierra de lagos y volcanes"/>
    <Travelers />
    <Stats />
    <Email />
  </Layout>
)

export default IndexPage
