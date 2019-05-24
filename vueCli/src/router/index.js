import Vue from 'vue'
import Router from 'vue-router'
// import example from '@/views/example/router'
import sweetStart from '@/views/sweetStart/router'

const home = () => import('@/views/home')

Vue.use(Router)

let routes = []
// routes.push(...example) // 案例
routes.push(...sweetStart)
// 根路由
let rootRouter = {
  path: '/',
  name: '/',
  component: home,
  meta: {
    title: '导航', // 标题
    explain: '', // 说明
    isMenu: false
  }
}
// 重定向路由
let redirectRoute = {
  path: '*',
  redirect: '/',
  meta: {
    isMenu: false
  }
}
let mode = 'hash'
routes = [rootRouter, ...routes, redirectRoute]
let handleRoutesDefaultProperty = {
  meta: {
    title: '', // 标题
    explain: '', // 说明
    isMenu: true
  },
  init(routers) {
    return routers.map(item => {
      let route = item
      if (route.children && route.children.length > 0) {
        route.children = this.init(route.children)
      }
      return this.isAuth(route)
    })
  },
  isAuth(item) {
    let {meta} = item
    if (meta) {
      item.meta = Object.assign({}, this.meta, meta)
      return item
    } else {
      return {meta: this.meta, ...item}
    }
  }
}
routes = handleRoutesDefaultProperty.init(routes)
export default new Router({
  mode,
  routes
})
