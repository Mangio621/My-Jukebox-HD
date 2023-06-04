import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchView from '../views/SearchView.vue'
import SongView from '../views/SongView.vue'
import ArtistView from '../views/ArtistView.vue'
import GenreGameView from '../views/GenreGameView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/song',
    name: 'song',
    component: SongView
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView
  },
  {
    path: '/artist',
    name: 'artist',
    component: ArtistView
  },
  {
    path: '/genreGame',
    name: 'genreGame',
    component: GenreGameView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
