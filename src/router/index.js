import Login from '../pages/login'
import Register from '../pages/register'
import Home from '../pages/home'
import AllProduct from '../pages/allProduct'
import ProductDetail from '../pages/productDetail'
import Cart from '../pages/cart'
import HistoryOrder from '../pages/historyOrder'
import MyLike from '../pages/myLike'
import ConfirmOrder from '../pages/confirmOrder'
import OrderPay from '../pages/orderPay'
import AddProduct from '../pages/addProduct'
import NotFound from '../pages/notFound'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    requiresAuth: true
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
    path: '/confirm-order',
    component: ConfirmOrder,
    requiresAuth: true
  },
  {
    path: '/order-pay',
    component: OrderPay,
    requiresAuth: true
  },
  {
    path: '/add-product',
    component: AddProduct,
    requiresAuth: true
  },
  {
    path: '*',
    component: NotFound
  }
]

export default routes
