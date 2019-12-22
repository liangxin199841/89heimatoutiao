import LayoutAside from './layout-aside'
import LayoutHeader from './layout-header'
export default {
  install (vue) {
    vue.component('layout-aside', LayoutAside)// 全局注册
    vue.component('layout-header', LayoutHeader)// 全局注册
  }
}
