import React, { memo, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Action from '../../components/ProductAction'
// import { BASE_IMG_URL } from '../../constants'
import '../../assets/iconfont/iconfont.css'
import './index.scss'

const Product = props => {
  const { list } = props
  const { push } = useHistory()
  const { role } = useSelector(state => state.user)

  const handleGoDetail = useCallback(
    id => {
      push('/detail/' + id)
    },
    [push]
  )

  return (
    <div className='product-container'>
      <ul className='list'>
        {list.map((item, index) => (
          <li key={item.product_id + index} className='item'>
            <div className='product-img'>
              <img
                onClick={() => handleGoDetail(item.product_id)}
                src={item.product_image}
                className='img'
                alt='product'
              />
            </div>
            <div className='intro'>
              <div onClick={() => handleGoDetail(item.product_id)} className='price-intro'>
                ${item.product_price}
              </div>
              <div className='intro-title'>{item.product_name}</div>
              <div className='sales'>Sales:{item.sale_num}</div>
              {role === 'buyer' ? <Action id={item.product_id} likeId={item.like_id} /> : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default memo(Product)
