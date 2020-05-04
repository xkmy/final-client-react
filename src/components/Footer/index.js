import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

const Footer = () => {
  return (
    <footer className='footer-container'>
      <ul className='footer'>
        <li className='item'>
          <p className='title'>商城保障</p>
          <p className='service'>7天无理由退换货</p>
          <p className='service'>品质保障</p>
        </li>
        <li className='item'>
          <p className='title'>购物指南</p>
          <div className='service'>
            <Link to='/register' className='link'>
              账号注册
            </Link>
          </div>
          <p className='service'>支付方式</p>
        </li>
        <li className='item'>
          <p className='title'>消费者服务</p>
          <p className='service'>消费者保障</p>
          <p className='service'>违规举报</p>
        </li>
      </ul>
      <p className='reserved'>All Rights Reserved: 乐器商城</p>
    </footer>
  )
}
export default React.memo(Footer)
