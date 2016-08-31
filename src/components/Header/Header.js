import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import { Row } from 'antd'
import classes from './Header.scss'

export const Header = () => (
  <Row>
    <Navigation />
  </Row>
)

export default Header
