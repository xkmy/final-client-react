import React from 'react'
import { Checkbox, Empty } from 'antd'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './index.scss'

const Cart = () => {
  const cart = [{ id: 1, checked: true, name: '吉他', price: 1000, count: 1 }]

  return (
    <>
      <Header />
      <div className='cart-container'>
        <div className='container'>
          <div className='order-title'>
            <span>全选</span>
            <span>商品名称</span>
            <span>单价</span>
            <span>数量</span>
            <span>小计</span>
            <span>操作</span>
          </div>
          {cart.length > 0 ? (
            <div className='order-content'>
              <ul className='order-list'>
                {cart.map(item => (
                  <li key={item.id} className='product'>
                    <span className='check'>
                      <Checkbox defaultChecked={item.checked} />
                    </span>
                    <span className='name'>{item.name}</span>
                    <span className='one-price'>{item.price}元</span>
                    <span className='number'>
                      <div className='number-container'>
                        <span className='add'>-</span>
                        <span className='count'>{item.count}</span>
                        <span className='decrease'>+</span>
                      </div>
                    </span>
                    <span className='price'>{item.price * item.count}元</span>
                    <span className='delete-wrapper'>
                      <span className='delete'>删除</span>
                    </span>
                  </li>
                ))}
              </ul>
              <div className='order-price'>
                <div className='left'>
                  <span className='total'>共1 件商品</span>
                  <span className='selected'>
                    已选择<span className='product-count'>1</span>件
                  </span>
                </div>
                <div className='right'>
                  <span className='total'>
                    合计:<span className='total-price'>1000</span>元
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className='empty-wrapper'>
              <Empty />
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  )
}
export default React.memo(Cart)
