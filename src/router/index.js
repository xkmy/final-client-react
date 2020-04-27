import Login from '../pages/login'
import Register from '../pages/register'
import NotFound from '../pages/notFound'
import Home from '../pages/home'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    requiresAuth: true,
  },
  {
    path: '/login',
    component: Login,
    requiresAuth: false,
  },
  {
    path: '/register',
    component: Register,
    requiresAuth: false,
  },
  {
    path: '*',
    component: NotFound,
  },
]

export default routes
