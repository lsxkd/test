import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/components/Movie/Movie'
import Cinema from '@/components/Cinema/Cinema'
import Mine from '@/components/Mine/Mine'
import MyOrder from '@/components/mine/myorder/MyOrder'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/cinema',
      name: 'Cinema',
      component: Cinema
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/myorder',
      name: 'MyOrder',
      component: MyOrder
    }
  ],
  linkActiveClass:"selected"
})
