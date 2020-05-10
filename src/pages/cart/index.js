import React, { useCallback, useEffect, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { Checkbox, Empty, Modal, message } from 'antd'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import request from '../../api/request'
import './index.scss'

const Cart = () => {
  const { push } = useHistory()
  const [cart, setCart] = useState([])

  const getCart = useCallback(async () => {
    const result = await request('/cart')
    const { status, data } = result
    if (status === 0) {
      const { cart } = data
      const newCart = cart.map(item => {
        item.checked = true
        return item
      })
      setCart(newCart)
    }
  }, [])

  useEffect(() => {
    getCart()
  }, [getCart])

  const handleDelete = useCallback(id => {
    Modal.confirm({
      title: 'Are you sure you want to delete this product?',
      onOk: async () => {
        const result = await request('/cart/' + id, null, 'DELETE')
        const { status } = result
        if (status === 0) {
          message.success('删除成功')
        }
      }
    })
  }, [])

  const computeSum = (cart, type) => {
    const sum = cart.reduce((pre, cur) => {
      if (cur.checked) {
        if (type === 'price') {
          return pre + cur.product_price * cur.product_num
        }
        return pre + cur.product_num
      }
      return pre
    }, 0)
    return sum
  }

  const handleAddOrReduceCount = async (type, id) => {
    const result = await request(
      '/cart/' + id,
      { change_type: type === 'add' ? 'add' : 'minus' },
      'PUT'
    )
    const { status } = result
    if (status === 0) {
      const newCart = JSON.parse(JSON.stringify(cart))
      newCart.map(item => {
        if (item.cart_id === id) {
          type === 'add' ? item.product_num++ : item.product_num--
        }
        return item
      })
      setCart(newCart)
    }
  }

  const handleChecked = useCallback(
    (e, id) => {
      const newCart = JSON.parse(JSON.stringify(cart))
      newCart.map(item => {
        if (item.cart_id === id) {
          item.checked = e.target.checked
        }
        return item
      })
      setCart(newCart)
    },
    [cart]
  )

  const handleToSettle = useCallback(async () => {
    let params = {}
    const checkedProducts = []
    const newCart = JSON.parse(JSON.stringify(cart))
    newCart.map(item => {
      if (item.checked) {
        let obj = {}
        obj.product_id = item.product_id
        obj.cart_id = item.cart_id
        obj.product_num = item.product_num
        checkedProducts.push(obj)
      }
    })
    params.pro_list = checkedProducts
    params.total_price = computeSum(cart, 'price')
    const payResult = await request('/order', params, 'POST')
    const { status } = payResult
    if (status === 0) {
      getCart()
      message.success('结算成功')
    }
    // push('/confirm-order', { params })
  }, [cart, getCart])

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
                  <li key={item.cart_id} className='product'>
                    <span className='check'>
                      <Checkbox
                        onChange={e => handleChecked(e, item.cart_id)}
                        defaultChecked={item.checked}
                      />
                    </span>
                    <span className='name'>{item.product_name}</span>
                    <span className='one-price price'>${item.product_price}</span>
                    <span className='number'>
                      <div className='number-container'>
                        <span
                          onClick={() => handleAddOrReduceCount('minus', item.cart_id)}
                          className='add'
                        >
                          -
                        </span>
                        <span className='count'>{item.product_num}</span>
                        <span
                          onClick={() => handleAddOrReduceCount('add', item.cart_id)}
                          className='decrease'
                        >
                          +
                        </span>
                      </div>
                    </span>
                    <span className='price'>{item.product_price * item.product_num}元</span>
                    <span className='delete-wrapper'>
                      <span onClick={() => handleDelete(item.cart_id)} className='delete'>
                        delete
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
              <div className='order-price'>
                <div className='left'>
                  <span className='total'>{computeSum(cart)} products</span>
                  <span className='selected'>
                    chosen<span className='product-count'>{computeSum(cart)}</span>件
                  </span>
                </div>
                <div className='right'>
                  <span className='total'>
                    total:<span className='total-price'>{computeSum(cart, 'price')}</span>元
                  </span>
                  <span onClick={handleToSettle} to='confirm-order' className='settle-accounts'>
                    To settle
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className='empty-wrapper'>
              {/* <Empty /> */}
              <div>
                您还没有添加商品,<Link to='/'>去添加</Link>
              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  )
}
export default React.memo(Cart)
