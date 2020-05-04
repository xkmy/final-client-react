import React from 'react'
import './index.scss'

const Guarantee = () => {
  return (
    <div className='guarantee-container'>
      <ul className='guarantee-list'>
        <li className='guarantee-li'>
          <div className='left'>
            <span className='name'>优</span>
          </div>
          <div className='right'>
            <h4 className='top'>品质保证</h4>
            <div className='bottom'>质量保证 品质无忧</div>
          </div>
        </li>
        <li className='guarantee-li'>
          <div className='left'>
            <span className='name'>质</span>
          </div>
          <div className='right'>
            <h4 className='top'>七天无理由退货</h4>
            <div className='bottom'>为您提供售后无忧的保障</div>
          </div>
        </li>
        <li className='guarantee-li'>
          <div className='left'>
            <span className='name'>服</span>
          </div>
          <div className='right'>
            <h4 className='top'>特色服务</h4>
            <div className='bottom'>为您提供与众不同的服务</div>
          </div>
        </li>
        <li className='guarantee-li'>
          <div className='left'>
            <span className='name'>务</span>
          </div>
          <div className='right'>
            <h4 className='top'>帮助中心</h4>
            <div className='bottom'>您的购物指南</div>
          </div>
        </li>
      </ul>
    </div>
  )
}
export default React.memo(Guarantee)
