// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/reset.scss'
import './assets/styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Header from './pages/public/public_js/header.js'
import Footer from './pages/public/public_js/footer.js'
import Searcher from './pages/public/public_js/searcher.js'
import Ads from './pages/public/public_js/ads.js'
import Scroll from './pages/public/public_js/scroll.js'
Vue.use(Header)
Vue.use(Footer)
Vue.use(Searcher)
Vue.use(Ads)
Vue.use(Scroll)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
