import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1140,
            padding: `0 1.0875rem 0`,
            paddingTop: 0,
          }}
        >
          {children}
        </div>
        <footer>
          <div style={{ margin: `0 auto`, maxWidth: `1140px`, padding: `0 1.0875rem`, }}>
            © {new Date().getFullYear()}, Built by <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Paul</a>  🚀
          </div>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
