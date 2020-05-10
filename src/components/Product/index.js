import React, { memo, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import Action from '../../components/ProductAction'
// import { BASE_IMG_URL } from '../../constants'
import '../../assets/iconfont/iconfont.css'
import './index.scss'

const Product = props => {
  const { list } = props
  const { push } = useHistory()

  const handleGoDetail = useCallback(
    id => {
      push('/detail/' + id)
    },
    [push]
  )

  return (
    <div className='product-container'>
      <ul className='list'>
        {list.map(item => (
          <li key={item.product_id} className='item'>
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
                ¥{item.product_price}
              </div>
              <div className='intro-title'>{item.product_name}</div>
              <Action id={item.product_id}/>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default memo(Product)
