import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

export default (initialState = {}, history) => {
  // react-router-redux 库的作用是整合 redux 和 react router, 相当于一个加强版本的 history
  let middleware = applyMiddleware(thunk, routerMiddleware(history))

  // Use DevTools chrome extension in development
  if (__DEBUG__) {
    const devToolsExtension = window.devToolsExtension

    if (typeof devToolsExtension === 'function') {
      middleware = compose(middleware, devToolsExtension())
    }
  }

  // 创建一个 Redux store 来以存放应用中所有的 state。
  // reducers() 函数返回一个被合并过的reducer
  const store = createStore(reducers(), initialState, middleware)

  store.asyncReducers = {}

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default

      store.replaceReducer(reducers)
    })
  }

  return store
}
