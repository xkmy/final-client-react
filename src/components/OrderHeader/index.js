import React from 'react'
import { useSelector } from 'react-redux'
import './index.scss'

const OrderHeader = ({ title, content }) => {
  const { username } = useSelector(state => state.user)

  return (
    <div className='order-title-container'>
      <div className='container'>
        <div className='title-wrapper'>
          <div>
            <span className='title'>{title}</span>
            <span className='tip'>{content}</span>
          </div>
          <div>{username}</div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(OrderHeader)
