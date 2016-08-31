export default {
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Index = require('../containers/Index/Index').default
      cb(null, Index)
    })
  }
}
