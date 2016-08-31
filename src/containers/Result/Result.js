import { connect } from 'react-redux'
import { Row, Col, Card } from 'antd'
import React, { Component } from 'react'
import SearchTab from '../../components/SearchTab/SearchTab'
import ResultCard from '../../components/ResultCard/ResultCard'
import styles from './Result.scss'

class Result extends Component {
  render () {
    var results = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let output = []
    output.push(
      <SearchTab />
    )
    results.map(
      function (result) {
        output.push(
          <div className={styles.result}>
            <ResultCard style={{ width: 600 }} key={result}/>
          </div>)
      })
    return (
      <Row type='flex' justify='start' align='top'>
        <Col span={16} offset={2}>
          {output}
        </Col>
        <Col span={4}>
          <div className={styles.board}>
            <Card loading title='Card title'>
              Whatever content
            </Card>
          </div>
        </Col>
      </Row>
    )
  }
}
export default connect()(Result)
