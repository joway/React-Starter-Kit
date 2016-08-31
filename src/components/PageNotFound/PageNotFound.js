import React, { Component } from 'react'
import { Input, Button, Row, Col } from 'antd'
import NotFoundImage from '../../static/images/404.png'
import styles from './PageNotFound.scss'

class PageNotFound extends Component {
  render () {
    return (
      <Row type='flex' justify='center' align='middle'>
        <Col span={6}>
          <img src={NotFoundImage} className={styles.box}/>
        </Col>
      </Row>
    )
  }
}

export default PageNotFound
