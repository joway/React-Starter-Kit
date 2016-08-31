export default {
  path: 'search',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Result = require('../containers/Result/Result').default
      cb(null, Result)
    })
  }
}
