import React, { memo, useEffect, useCallback, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Breadcrumb, BackTop } from 'antd'
import Header from '../../components/Header'
import ProductAction from '../../components/ProductAction'
import Guarantee from '../../components/Guarantee'
import Footer from '../../components/Footer'
import request from '../../api/request'
import { BASE_IMG_URL } from '../../constants'
import '../../assets/iconfont/iconfont.css'
import './index.scss'

const ProductDetail = () => {
  const { id } = useParams()
  const [productDetail, setProductDetail] = useState({})
  const [productNumber, setProductNumber] = useState(1)

  const detailImgs = [
    {
      id: 1,
      url:
        'http://www.musicdo.cn/Upload/ueditorimage/06/22/cc152567-9d36-4092-a2ba-530220a9303d1326752.jpg',
      alt: '赠送'
    },
    {
      id: 2,
      url:
        'https://img.alicdn.com/imgextra/i2/3582526154/TB2_Vjdzx1YBuNjy1zcXXbNcXXa_!!3582526154.jpg',
      alt: '不忘初心'
    },
    {
      id: 3,
      url: 'https://img.alicdn.com/imgextra/i1/3582526154/O1CN01wfcEAv1vKZsQS9qCD_!!3582526154.jpg',
      alt: '创始人'
    },
    {
      id: 4,
      url:
        'https://img.alicdn.com/imgextra/i2/3582526154/TB2frCtzpGWBuNjy0FbXXb4sXXa_!!3582526154.jpg',
      alt: '飘洋过海'
    },
    {
      id: 5,
      url:
        'https://img.alicdn.com/imgextra/i2/3582526154/TB2FCicrfuSBuNkHFqDXXXfhVXa_!!3582526154.jpg',
      alt: '调音'
    },
    {
      id: 6,
      url:
        'https://img.alicdn.com/imgextra/i2/3582526154/TB255xPrndYBeNkSmLyXXXfnVXa_!!3582526154.jpg',
      alt: '参数'
    },
    {
      id: 7,
      url:
        'https://img.alicdn.com/imgextra/i4/3582526154/TB2dBPyzx9YBuNjy0FfXXXIsVXa_!!3582526154.jpg',
      alt: '参数'
    },
    {
      id: 8,
      url:
        'https://img.alicdn.com/imgextra/i4/3582526154/TB2HOlGrcyYBuNkSnfoXXcWgVXa_!!3582526154.jpg',
      alt: '参数'
    }
  ]

  useEffect(() => {
    ;(async () => {
      const result = await request('/product/' + id)
      console.log(result)
      const { status, data } = result
      if (status === 0) {
        setProductDetail(data.product)
      }
    })()
  }, [id])

  const handleAddToCart = useCallback(async => {
    setProductNumber(productNumber => productNumber + 1)
  }, [])

  return (
    <div className='product-container'>
      <Header />
      <main className='container'>
        <div className='breadcrumb-nav'>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to='/'>首页</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>吉他</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className='product-main'>
          <div className='product-intor'>
            <div className='left'>
              <img
                src={BASE_IMG_URL + '/Upload/3134/dfd787ae8b0b4fa48dd12b241c4ae5bf.jpg'}
                className='img'
                alt='吉他'
              />
            </div>
            <div className='right'>
              <ul className='product'>
                <li className='product-title'>
                  DOVE DD220S FG复古色 和平鸽 鸽子吉他初学者学生女男单板民谣
                </li>
                <li className='li price'>
                  价格:<span className='span'>${productDetail.product_price}</span>
                </li>
                <li className='li item'>
                  服务:
                  <span className='factory'>由厂家或供应商提供和配送</span>
                </li>
                <li className='li item'>
                  <span>数量:</span>
                  <span className='count'>
                    <span className='reduce'>-</span>
                    <span className='number'>{productNumber}</span>
                    <span onClick={handleAddToCart} className='add'>
                      +
                    </span>
                  </span>
                  件{/* <span className='stock'>库存 8 件</span> */}
                </li>
                <li className='li'>
                  <ProductAction
                    id={productDetail.product_id}
                    className='action'
                    likeId={productDetail.like_id}
                  />
                </li>
                <li className='li pay-wrapper'>
                  <span>支付方式:</span>
                  <div className='pay'>
                    <span className='pay-method'>
                      <img
                        className='pay-img'
                        src={BASE_IMG_URL + 'images/_r2_c2.jpg'}
                        alt=''
                      />
                      支付宝
                    </span>
                    <span className='pay-method'>
                      <img
                        className='pay-img'
                        src={BASE_IMG_URL + '/images/_r2_c4.jpg'}
                        alt='微信'
                      />
                      微信
                    </span>
                    <span className='pay-method'>
                      <img
                        className='pay-img'
                        src={BASE_IMG_URL + '/images/_r2_c8.jpg'}
                        alt='支付宝'
                      />
                      银行卡
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='product-detail'>
            <div className='detail-title'>
              <div className='detail'>商品详情</div>
            </div>
            {detailImgs.map(item => (
              <img src={item.url} key={item.id} className='img' alt={item.alt} />
            ))}
          </div>
          <Guarantee />
        </div>
        <Footer />
        <BackTop className='back-to-top'>top</BackTop>
      </main>
    </div>
  )
}

export default memo(ProductDetail)
