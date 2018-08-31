import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Search from '@/pages/search/Search'
import Detail from '@/pages/detail/Detail'
import Collect from '@/pages/collect/Collect'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/collect',
      name: 'Collect',
      component: Collect
    }
  ]
})
