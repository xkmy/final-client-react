import React from 'react'
import { Carousel } from 'antd'
import './index.scss'

const Banner = () => {
  return (
    <div className='home-banner'>
      <Carousel autoplay >
        <div className='item'>
          <img src='http://www.musicdo.cn/Upload/3134/20191106153341.jpg' className='img' alt='' />
        </div>
        <div className='item'>
          <img src='http://www.musicdo.cn/Upload/3134/20191106152541.jpg' className='img' alt='' />
        </div>
      </Carousel>
      <div className='intro-tags'>
        <div className='tag tag1'>正品实惠</div>
        <div className='tag tag2'>品牌授权</div>
        <div className='tag tag3'>全国联保</div>
      </div>
    </div>
  )
}

export default React.memo(Banner)
