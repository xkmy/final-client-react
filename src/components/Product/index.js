import React, { memo, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import Action from '../../components/ProductAction'
import { BASE_IMG_URL } from '../../constants'
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
          <li key={item.id} className='item'>
            <div className='product-img'>
              <img
                onClick={() => handleGoDetail(item.id)}
                src={BASE_IMG_URL + item.imgUrl}
                className='img'
                alt='product'
              />
            </div>
            <div className='intro'>
              <div className='price-intro'>¥{item.price}</div>
              <div className='intro-title'>{item.intro}</div>
              <Action />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default memo(Product)
