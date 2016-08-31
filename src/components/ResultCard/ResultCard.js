import { Card, Row, Col } from 'antd'
import React, { Component } from 'react'

class ResultCard extends Component {
  render () {
    const { style } = this.props

    return (

    <Card title='Card title' extra={<a href='#'>More</a>} style={style}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    )
  }
}

export default ResultCard
