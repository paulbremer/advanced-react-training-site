import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.h1`
    font-size: 1.1rem;

    @media screen and (min-width: 768px) {
        font-size: 2.25rem;
    }
`

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `rebeccapurple`,
      backgroundColor: `#383c3d`,
      backgroundAttachment: `scroll, scroll`,
      backgroundSize: `800px, 800px`,
      backgroundRepeat: `repeat-y`,
      backgroundPosition: `top right, top left`,
      boxShadow: `inset 0 -15px 0 -10px rgba(255,255,255,0.1), inset 0 15px 0 -10px #ffc600`,

      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1140,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <StyledHeader style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </StyledHeader>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
