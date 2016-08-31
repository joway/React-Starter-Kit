import { Tabs, Row, Col } from 'antd'
import React, { Component } from 'react'
const TabPane = Tabs.TabPane

const SELECT_KEY_ALL = 1
const SELECT_KEY_TECH = 2
const SELECT_KEY_TRAVEL = 3

class SearchTab extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
        <Tabs defaultActiveKey={SELECT_KEY_ALL}>
          <TabPane tab='All' key={SELECT_KEY_ALL} />
          <TabPane tab='Tech' key={SELECT_KEY_TECH} />
          <TabPane tab='Travel' key={SELECT_KEY_TRAVEL} />
        </Tabs>
    )
  }
}

export default SearchTab
