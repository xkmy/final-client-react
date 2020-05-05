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
          Number of products:<span className='item'>1件</span>
        </li>
        <li className='li'>
          Commodity price:<span className='item'>1399元</span>
        </li>
        <li className='li'>
          Freight:<span className='item'>0元</span>
        </li>
        <li className='li'>
          Total payable:<span className='item total-price'>1399元</span>
        </li>
        <li className='li settle-accounts'>
          <Link to='/cart' className='action-btn back-cart-btn'>
            Return to shopping cart
          </Link>
          <Link to='/order-pay' className='action-btn settle-accounts-btn'>
            To settle
          </Link>
        </li>
      </ul>
    </div>
  )
}
export default React.memo(OrderProduct)
