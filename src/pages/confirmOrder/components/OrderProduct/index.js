import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

const OrderProduct = () => {
  return (
    <div className='order-product-container'>
      <div className='title'>commodity</div>
      <div className='product'>
        <div className='name'>guitar</div>
        <div className='price'>$1399x1</div>
        <div className='total'>$1399</div>
      </div>
      <ul className='description'>
        <li className='li'>
          商品件数:<span className='item'>1件</span>
        </li>
        <li className='li'>
          商品总价:<span className='item'>1399元</span>
        </li>
        <li className='li'>
          运费:<span className='item'>0元</span>
        </li>
        <li className='li'>
          应付总额:<span className='item total-price'>1399元</span>
        </li>
        <li className='li settle-accounts'>
          <Link to='/cart' className='action-btn back-cart-btn'>
            返回购物车
          </Link>
          <Link to='/order-pay' className='action-btn settle-accounts-btn'>
            去结算
          </Link>
        </li>
      </ul>
    </div>
  )
}
export default React.memo(OrderProduct)
