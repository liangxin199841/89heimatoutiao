import LayoutAside from './layout-aside'
import LayoutHeader from './layout-header'
import BreadCrumb from './common/bread-crumb'
export default {
  install (vue) {
    vue.component('layout-aside', LayoutAside)// 全局注册
    vue.component('layout-header', LayoutHeader)// 全局注册
    vue.component('bread-crumb', BreadCrumb)
  }
}
