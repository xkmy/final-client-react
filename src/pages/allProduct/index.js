import React, { useState, useEffect, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import { BackTop } from 'antd'
import Header from '../../components/Header'
import Product from '../../components/Product'
import Footer from '../../components/Footer'
import request from '../../api/request'
import { MUSICAL_INSTRUMENT_TYPE, INSTRUMENT_PRICE_TYPE } from '../../constants'
import './index.scss'

const Home = () => {
  const { state } = useLocation()
  let category = ''
  state ? (category = state.category) : (category = '')
  const [selectedMusicInstrumentType, setSelectedMusicInstrumentType] = useState(category || 'all')
  const [selectedPrice, setSelectedPrice] = useState('价格不限')
  const [productList, setProductList] = useState([])

  useEffect(() => {
    ;(async () => {
      const result = await request('/product')
      const { status, data } = result
      if (status === 0) {
        setProductList(data.products)
      }
    })()
  }, [])

  useEffect(() => {
    if (selectedMusicInstrumentType !== 'all' && setSelectedPrice !== '价格不限') {
      ;(async () => {
        const result = await request('/product', {
          product_type: selectedMusicInstrumentType,
          start_price: 0,
          end_price: 0
        })
        const { status, data } = result
        if (status === 0) {
          setProductList(data.products)
        }
      })()
    }
  }, [selectedMusicInstrumentType])

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
        <BackTop className='back-to-top'>top</BackTop>
      </div>
    </>
  )
}

export default React.memo(Home)
