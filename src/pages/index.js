import React from "react"

import Layout from "../components/layout"
import Stats from "../components/stats"
import Select from "../components/select"
import SEO from "../components/seo"
import Chart from "../components/chart"

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" />
      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <Stats url="https://covid19.mathdro.id/api/" />
            <Chart url="https://covid19.mathdro.id/api/daily"/>
          </div>
        </div>
      </section>
      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <Select />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
