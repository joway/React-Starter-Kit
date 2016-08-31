import React, { Component, PropTypes } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'

// 容器组件 - 特性:
// 1. 最顶层，路由处理
// 2. 从 Redux 获取 state
// 3. 向 Redux 派发 actions
class AppContainer extends Component {

  render () {
    // 获取 history, routes, store, 要求顺序匹配
    const { history, routes, store } = this.props
    // 将 history传给 react-router 的 Router, store 传给 redux 的 Provider
    return (
      <Provider store={store}>
        <Router history={history} children={routes} />
      </Provider>
    )
  }
}

// Prop 字段验证
AppContainer.propTypes = {
  history: PropTypes.object.isRequired,
  routes: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
}

export default AppContainer
