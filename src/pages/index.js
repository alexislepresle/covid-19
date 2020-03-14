import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Api from "../utils/api"

const IndexPage = () => {
  const {data, loading, error } = Api('https://covid19.mathdro.id/api/confirmed');

  return(
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    {data &&
    
    <table className="table">
      <thead>
        <tr>
          <th>Country</th>
          <th>Case</th>
          <th>Died</th>
          <th>Recover</th>
          <th>Last update</th>
        </tr>
      </thead>
      <tbody>
        {
          console.log("data "+data),
          data.map((country, code) => (
            <tr key={code}>
              <td>{country.countryRegion}</td>
              <td>{country.confirmed}</td>
              <td>{country.deaths}</td>
              <td>{country.recovered}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
    }
    

  </Layout>
)}

export default IndexPage
