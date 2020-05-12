import React, { useState, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Header from '../../components/Header'
import Product from '../../components/Product'
import Banner from './components/Banner'
import ShowProduct from './components/ShowProduct'
import request from '../../api/request'
import './index.scss'
import { Spin } from 'antd'

const Home = () => {
  const user = useSelector(state => state.user)
  console.log(user)
  const { push } = useHistory()
  const [productList, setProductList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      const result = await request('/product')
      const { status, data } = result
      setLoading(false)
      if (status === 0) {
        setProductList(data.products)
      }
    })()
  }, [])

  const handleLookMore = useCallback(() => {
    push('/all-product')
  }, [push])

  return (
    <div className='home-container'>
      <Header />
      <Banner />
      <div className='container'>
        <div className='title'>
          <span className='product'>产品</span>
          <span onClick={handleLookMore} className='look-more'>
            查看更多
          </span>
        </div>
        <ShowProduct />
        {loading ? (
          <div className='loading-wrapper'>
            <Spin delay={200} />
          </div>
        ) : (
          <Product list={productList} />
        )}
      </div>
    </div>
  )
}

export default React.memo(Home)
