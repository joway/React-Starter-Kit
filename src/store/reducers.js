import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

export const reducers = (asyncReducers) => {
  // combineReducers 用来拆分reducer
  return combineReducers({
    /* Add sync reducers here
    原理: 最开始只加载 routerReducer , 每当要新渲染一个router时,
         将该router注册进asyncReducers字典, 然后调用combineReducers, 构造出一个新的reducers
    */
    router,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer

  // replaceReducer : 替换 store 当前用来计算 state 的 reducer, 主要用来实现代码分离
  store.replaceReducer(reducers(store.asyncReducers))
}

export default reducers
