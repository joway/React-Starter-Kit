import React, { Component } from 'react'
import { Menu, Breadcrumb, Icon, Row, Col, Dropdown } from 'antd'
import { IndexLink, Link } from 'react-router'
import SearchInput from '../SearchInput/SearchInput'
import Logo from '../../static/images/logo.png'
import styles from './Navigation.scss'

const SEARCH_KEY = 'SEARCH'
const INDEX_KEY = 'INDEX'
const RESULT_KEY = 'RESULT'
const PAGE_NOT_FOUND_KEY = '404'

class Navigation extends Component {

  userProfile = () => (
    <Menu>
      <Menu.Item>
        <a target="_blank" href="http://www.alipay.com/">第一个菜单项</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" href="http://www.taobao.com/">第二个菜单项</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" href="http://www.tmall.com/">第三个菜单项</a>
      </Menu.Item>
    </Menu>
  )


  render () {
    return (
      <Row type='flex' justify='start' align='middle'>
        <Col span={2}>
          <img src={Logo} width={64}/>
        </Col>
        <Col span={6}>
          <div>
            <SearchInput placeholder='input search text' onSearch={''} style={{height: 30}}/>
          </div>
        </Col>
        <Col span={6} offset={6}>
          <Menu theme='light' mode='horizontal'
                defaultSelectedKeys={[INDEX_KEY]} style={{lineHeight: '48px'}}>
            <Menu.Item key={INDEX_KEY}>
              <IndexLink to='/'>
                Index
              </IndexLink>
            </Menu.Item>
            <Menu.Item key={RESULT_KEY}>
              <Link to='/search'>
                Result
              </Link>
            </Menu.Item>
            <Menu.Item key={PAGE_NOT_FOUND_KEY}>
              <Link to='/404'>
                404
              </Link>
            </Menu.Item>
          </Menu>
        </Col>

        <Col span={2} offset={2}>
          <Dropdown overlay={this.userProfile()}>
            <a className="ant-dropdown-link" href="#">
              Joway
              <Icon type="down"/>
            </a>
          </Dropdown>
        </Col>
      </Row>
    )
  }
}

export default Navigation
