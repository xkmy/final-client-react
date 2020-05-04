import React, { memo, useCallback } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Modal, message } from 'antd'
import '../../assets/iconfont/iconfont.css'
import './index.scss'

const ProductAction = props => {
  const { className } = props
  const { push } = useHistory()
  const { pathname } = useLocation()
  const { username } = useSelector(state => state.user)

  const handleAdd = useCallback(
    type => {
      if (username) {
        switch (type) {
          case 'buy':
            message.success('购买成功')
            break
          case 'cart':
            message.success('加入购物车')
            break
          case 'like':
            message.success('收藏成功')
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
    [pathname, push, username]
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
