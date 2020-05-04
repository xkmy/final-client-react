import React, { useState, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import { BackTop } from 'antd'
import Header from '../../components/Header'
import Product from '../../components/Product'
import Footer from '../../components/Footer'
import { MUSICAL_INSTRUMENT_TYPE, INSTRUMENT_PRICE_TYPE } from '../../constants'
import './index.scss'

const Home = () => {
  const { state } = useLocation()
  let category = ''
  state ? (category = state.category) : (category = '')
  const [selectedMusicInstrumentType, setSelectedMusicInstrumentType] = useState(category || 'all')
  const [selectedPrice, setSelectedPrice] = useState('价格不限')

  const [productList] = useState([
    {
      id: 1,
      intro: '敦煌古筝初学者入门考级成人694KK蕉窗夜语/蕉窗图案',
      imgUrl: '/upload/image/20191219/20191219163949_0443.jpg',
      price: 5647
    },
    {
      id: 2,
      intro: '敦煌/二胡/04B花梨木铜轸',
      imgUrl: '/Upload/3134/20180713102337.jpg',
      price: 749
    },
    {
      id: 3,
      intro: '欧米勒Irmler/立式钢琴/Professional EditionA1专业系列/7#黑色',
      imgUrl: '/upload/image/20190705/20190705155210_3956.jpg',
      price: 44680
    },
    {
      id: 4,
      intro: '欧米勒欧版Irmler/三角钢琴/F175/12718/EBHP(黑色)',
      imgUrl: '/upload/image/20190705/20190705151904_8661.jpg',
      price: 263800
    },
    {
      id: 5,
      intro: '威柏尔VIBRA长笛VFL-F101',
      imgUrl: '/Upload/3134/20181211162646.jpg',
      price: 2000
    },
    {
      id: 6,
      intro: '罗威ROWAY中音萨克斯RAS-30GL',
      imgUrl: '/Upload/3134/20181211154724.jpg',
      price: 7380
    },
    {
      id: 7,
      intro: '罗威ROWAY黑管RCL-316',
      imgUrl: '/Upload/3134/20181211153423.jpg',
      price: 3680
    },
    {
      id: 8,
      intro: '贝司克斯 德国品牌 BASIX套鼓BASIX-215闪光红色',
      imgUrl: '/upload/image/20191126/20191126142536_7370.jpg',
      price: 4800
    },
    {
      id: 9,
      intro: '敦煌柳琴654如意头花白木黄檀木轸',
      imgUrl: '/Upload/3134/20190106143207.jpg',
      price: 800
    }
  ])

  const handleTypeClick = useCallback(type => {
    setSelectedMusicInstrumentType(type)
  }, [])

  const handlePriceClick = useCallback(type => {
    setSelectedPrice(type)
  }, [])

  return (
    <>
      <Header />
      <div className='all-product-container'>
        <div className='condition-wrapper'>
          <div className='type'>
            <div className='type-title'>分类</div>
            {MUSICAL_INSTRUMENT_TYPE.map(item => (
              <span
                onClick={() => handleTypeClick(item.type)}
                key={item.id}
                className={`item ${item.type === selectedMusicInstrumentType ? 'selected' : ''}`}
              >
                {item.name}
              </span>
            ))}
          </div>
          <div className='price'>
            <div className='type-title'>价格</div>
            {INSTRUMENT_PRICE_TYPE.map(item => (
              <span
                onClick={() => handlePriceClick(item.value)}
                key={item.id}
                className={`item ${item.value === selectedPrice ? 'selected' : ''}`}
              >
                {item.value}
              </span>
            ))}
          </div>
        </div>
        <Product list={productList} />
        <Footer />
        <BackTop className='back-to-top'>
          top
        </BackTop>
      </div>
    </>
  )
}

export default React.memo(Home)
