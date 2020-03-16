import React from "react"
import PropTypes from "prop-types"

import "./layout.sass"

const Layout = ({ children }) => {

  return (
    <>
      <span role="img" aria-label="covid-19" className="is-size-1 has-text-centered">🦠</span>
      <h1 className="is-size-1 has-text-centered">COVID-19</h1>

      {children}
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            © {new Date().getFullYear()}, Built with {` `} <a href="https://www.gatsbyjs.org">Gatsby</a> by <a href="https://www.alexislepresle.com">alexislepresle.com</a>
          </p>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
