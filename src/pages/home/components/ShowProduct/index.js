import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { BASE_IMG_URL } from '../../../../constants'
import './index.scss'

const ShowProduct = () => {
  const { push } = useHistory()
  const imgList = [
    {
      id: 1,
      type: 'piano',
      url: '/img/piano-btn.png'
    },
    {
      id: 2,
      type: 'eletric', // 电声
      url: '/img/eletric-btn.png'
    },
    {
      id: 3,
      type: 'guitar', // 吉他
      url: '/img/guitar-btn.png'
    },
    {
      id: 4,
      type: 'pine', // 管乐
      url: '/img/pine-btn.png'
    },

    {
      id: 5,
      type: 'violin', // 弦乐
      url: '/img/violin-btn.png'
    },
    {
      id: 6,
      type: 'drump', // 打击乐
      url: '/img/drump-btn.png'
    },
    {
      id: 7,
      type: 'folk',
      url: '/img/folk-btn.png'
    },
    {
      id: 8,
      type: 'present',
      url: '/img/present-btn.png'
    }
  ]

  const handleGo = useCallback(
    type => {
      push('/all-product', { category: type })
    },
    [push]
  )

  return (
    <div className='show-product-container'>
      <ul className='list'>
        {imgList.map(item => (
          <li onClick={() => handleGo(item.type)} className='li' key={item.id}>
            <img src={BASE_IMG_URL + item.url} className='img' alt='' />
          </li>
        ))}
      </ul>
    </div>
  )
}
export default React.memo(ShowProduct)
