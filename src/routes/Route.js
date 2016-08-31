// We only need to import the modules necessary for initial render
import App from '../containers/App/App'
import IndexRoute from './Index'
import PageNotFound from './PageNotFound'
import ResultRoute from './Result'
import Redirect from './Redirect'

/*  Note:
 一个或多个的 Route 或 PlainRoute。当 history 改变时,
 <Router> 会匹配出 Route 的一个分支，并且渲染这个分支中配置的组件,
 渲染时保持父 route 组件嵌套子 route 组件。
 即在渲染时 component 包含着 childRoutes

 对于每一个 route 都传入一个 store, 在每个子route里去进行下一步动态加载路由
 ( 当前也可以通过 getChildRoutes 替代childRoutes数组来动态加载当前路由 )
 */
export const createRoutes = (store) => ({
  path: '/',
  component: App,
  indexRoute: IndexRoute,
  childRoutes: [
    ResultRoute,
    PageNotFound,
    Redirect
  ]
})

export default createRoutes
