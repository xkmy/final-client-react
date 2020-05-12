import React, { useState, useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { List, Modal, message, BackTop } from 'antd'
import Header from '../../components/Header'
import ProductAction from '../../components/ProductAction'
import Footer from '../../components/Footer'
import request from '../../api/request'
// import { BASE_IMG_URL } from '../../constants'
import './index.scss'

const MyLike = () => {
  const { push } = useHistory()
  const [likeList, setLikeList] = useState([])

  const getLikeList = useCallback(async () => {
    const result = await request('/like')
    const { status, data } = result
    if (status === 0) {
      setLikeList(data.likes)
    }
  }, [])

  useEffect(() => {
    getLikeList()
  }, [getLikeList])

  const handleClick = useCallback(
    async (type, id) => {
      switch (type) {
        case 'add':
          const result = await request('/cart', { product_id: id }, 'POST')
          const { status } = result
          if (status === 0) {
            message.success('Added successfully!')
          }
          break
        case 'buy':
          push('/cart')
          break
        case 'cancel':
          Modal.confirm({
            title: '您确定要取消收藏该商品吗?',
            cancelText: '取消',
            okText: '确定',
            onOk: async () => {
              const result = await request('/like/' + id, null, 'DELETE')
              const { status } = result
              console.log(result)
              if (status === 0) {
                getLikeList()
                message.success('取消成功')
              }
            }
          })
          break
        default:
          break
      }
    },
    [getLikeList, push]
  )

  return (
    <div className='my-like-container'>
      <Header />
      <section className='container'>
        <List
          className='like-list'
          itemLayout='vertical'
          size='large'
          dataSource={likeList}
          renderItem={item => (
            <List.Item
              className='li'
              key={item.product_id}
              extra={
                <div className='product-img'>
                  <img src={item.product_image} className='img' alt='product' />
                </div>
              }
            >
              <List.Item.Meta title={item.product_name} description={item.description} />
              <div className='price'>unit price:${item.product_price}</div>
              <ProductAction id={item.product_id} className='action' likeId={item.like_id} />
            </List.Item>
          )}
        />
        <Footer />
        <BackTop className='back-to-top'>top</BackTop>
      </section>
    </div>
  )
}
export default React.memo(MyLike)
