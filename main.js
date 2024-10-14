const { createApp, ref } = Vue
const { createRouter, createMemoryHistory, RouterLink, RouterView } = VueRouter

import Home from './components/home.js'

import About from './components/about.js'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp({
  setup() {
    return {
      count: ref(0)
    }
  },
  components: {
    Home,
    RouterLink,
    RouterView
  },
  template: `
   <h1>Hello Vue No Node!</h1>
        <p>
            <strong>Current route path:</strong> {{ $route.fullPath }}
        </p>
        <nav>
            <RouterLink to="/">Go to Home</RouterLink>
            <RouterLink to="/about">Go to About</RouterLink>
        </nav>
        <main>
            <RouterView />
        </main>
  `
})
.use(router)
.mount('#app')
