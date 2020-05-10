import React, { memo, useCallback } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Modal, message } from 'antd'
import request from '../../api/request'
import '../../assets/iconfont/iconfont.css'
import './index.scss'

const ProductAction = props => {
  const { className, id } = props
  const { push } = useHistory()
  const { pathname } = useLocation()
  const { username } = useSelector(state => state.user)

  const handleAdd = useCallback(
    async type => {
      if (username) {
        switch (type) {
          case 'buy':
            // push('/confirm-order')
            push('/cart')
            break
          case 'cart':
            const cartResult = await request('/cart', { product_id: id }, 'POST')
            const { status: cartStatus } = cartResult
            if (cartStatus === 0) {
              Modal.success({
                title: 'add to Cart successful!',
                okText: 'go check',
                onOk: () => {
                  push('/cart')
                }
              })
            }
            break
          case 'like':
            const result = await request('/like', { product_id: id }, 'POST')
            const { status } = result
            if (status === 0) {
              message.success('collection success')
            }
            break
          default:
            break
        }
        return
      }
      Modal.info({
        title: '请您先登录!',
        okText: '去登陆',
        onOk: () => {
          push('/login', { from: pathname })
        }
      })
    },
    [id, pathname, push, username]
  )

  return (
    <div className='action-wrapper'>
      <span
        onClick={() => handleAdd('buy')}
        className={`buy ${className ? className : 'action-item'} `}
      >
        立即购买
      </span>
      <span
        onClick={() => handleAdd('cart')}
        className={`add-cart ${className ? className : 'action-item'} `}
      >
        加入购物车
      </span>
      <span onClick={() => handleAdd('like')} className='add-like'>
        <i className='iconfont icon-shoucang' />
        <span className='like'>加入收藏</span>
      </span>
    </div>
  )
}

export default memo(ProductAction)
