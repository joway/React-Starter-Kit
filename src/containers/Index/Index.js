import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Row, Col } from 'antd'
import styles from './Index.scss'
import SearchInput from '../../components/SearchInput/SearchInput'
import SearchTab from '../../components/SearchTab/SearchTab'
import Logo from '../../static/images/logo.png'
class Index extends Component {
  render () {
    return (
      <Row justify='space-around' align='middle'>
        <Col span={10} offset={7} className={styles.searchBox}>
          <div className={styles.searchLogo}>
            <img src={Logo} width={80}/>
          </div>
          <Row type='flex' justify='space-around' align='middle'>
            <SearchTab />
          </Row>
          <Row type='flex' justify='space-around' align='middle'>
            <Col span={24}>
              <SearchInput placeholder='input search text' onSearch={''} style={{height: 40}}/>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default connect()(Index)
