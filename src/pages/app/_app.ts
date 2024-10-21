import '@/styles/index.css'
import { createRouter, createWebHashHistory, createMemoryHistory } from 'vue-router'
import type { App } from 'vue'
import HomeView from '@/components/vue/views/HomeView.vue'
const About = { template: '<div>About</div>' }
const history = import.meta.env.SSR ? createMemoryHistory() : createWebHashHistory()

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: About }
]

const router = createRouter({
  history,
  routes // `routes: routes`
})

export default (app: App) => {
  app.use(router)
}
