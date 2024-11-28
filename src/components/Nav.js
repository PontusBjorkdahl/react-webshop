import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Nav() {
  return (
    <div>
        <ProductLink to="/">| Products |</ProductLink>
    </div>
  )
}

const ProductLink = styled(Link)`
  text-decoration: none;
  font-size: 25px;
  color: black;

  &:hover {
    font-weight: bold;
  }
`

export default Nav