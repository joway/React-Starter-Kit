import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Footer.scss'

export const Header = () => (
  <footer>
    <h1>Footer</h1>
    <IndexLink to='/' activeClassName={classes.activeRoute}>
      Home
    </IndexLink>
    <Link to='/404' activeClassName={classes.activeRoute}>
      404
    </Link>
  </footer>
)

export default Header
