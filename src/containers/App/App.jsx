import React from 'react'
import { Row, Col } from 'antd'
import Header from '../../components/Header/Header'

export const App = ({ children }) => (
  <Row>
    <Header />
    <Row>
      <Col>
        {children}
      </Col>
    </Row>
  </Row>
)

App.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default App
