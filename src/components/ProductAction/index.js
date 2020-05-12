import React, { memo, useCallback, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Modal, message } from 'antd'
import request from '../../api/request'
import '../../assets/iconfont/iconfont.css'
import './index.scss'

const ProductAction = props => {
  const { className, id, likeId } = props
  const { push } = useHistory()
  const { pathname } = useLocation()
  const { username } = useSelector(state => state.user)
  const [likedFlag, setLikedFlag] = useState(likeId ? true : false)

  const handleAction = useCallback(
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
              setLikedFlag(true)
              message.success('Collection success')
            } else {
              message.info('You have already collected it, you cannot repeat it anymore!')
            }
            break
          case 'cancelLike':
            const cancelLikeresult = await request('/changeLikeStatus', { product_id: id })
            const { status: cancelLikeStatus } = cancelLikeresult
            if (cancelLikeStatus === 0) {
              message.success('Successful operation')
              setLikedFlag(false)
            }
            break
          default:
            break
        }
        return
      }
      Modal.info({
        title: 'Please login first!',
        okText: 'Go to log in',
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
        onClick={() => handleAction('buy')}
        className={`buy ${className ? className : 'action-item'} `}
      >
        立即购买
      </span>
      <span
        onClick={() => handleAction('cart')}
        className={`add-cart ${className ? className : 'action-item'} `}
      >
        加入购物车
      </span>
      {!likedFlag ? (
        <span onClick={() => handleAction('like')} className='add-like'>
          <i className='iconfont icon-shoucang liked' />
          <span className='liked'>
            <span>加入收藏</span>
          </span>
        </span>
      ) : (
        <span
          onClick={() => handleAction('cancelLike')}
          className={`cancel-like ${className ? className : 'action-item'} `}
        >
          取消收藏
        </span>
      )}
    </div>
  )
}

export default memo(ProductAction)
