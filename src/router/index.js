import Login from '../pages/login'
import Register from '../pages/register'
import Home from '../pages/home'
import AllProduct from '../pages/allProduct'
import ProductDetail from '../pages/productDetail'
import Cart from '../pages/cart'
import HistoryOrder from '../pages/historyOrder'
import MyLike from '../pages/myLike'
import NotFound from '../pages/notFound'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    requiresAuth: false
  },
  {
    path: '/login',
    component: Login,
    requiresAuth: false
  },
  {
    path: '/register',
    component: Register,
    requiresAuth: false
  },
  {
    path: '/detail/:id',
    exact: true,
    component: ProductDetail,
    requiresAuth: true
  },
  {
    path: '/all-product',
    component: AllProduct,
    requiresAuth: true
  },
  {
    path: '/cart',
    component: Cart,
    requiresAuth: true
  },
  {
    path: '/history-order',
    component: HistoryOrder,
    requiresAuth: true
  },
  {
    path: '/my-like',
    component: MyLike,
    requiresAuth: true
  },
  {
    path: '*',
    component: NotFound
  }
]

export default routes
