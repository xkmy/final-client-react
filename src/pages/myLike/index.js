import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { List, Modal, message, BackTop } from 'antd'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { BASE_IMG_URL } from '../../constants'
import './index.scss'

const MyLike = () => {
  const { push } = useHistory()

  const listData = []
  for (let i = 0; i < 5; i++) {
    listData.push({
      title: '钢琴',
      description: (
        <>
          <div >收藏日期: 2020-4-20</div>
          <div className='price'>单价: ¥5000</div>
        </>
      ),
      content: '欧米勒T1系列立式钢琴儿童家庭学校演奏初学专业钢琴'
    })
  }

  const handleClick = useCallback(
    type => {
      switch (type) {
        case 'add':
          message.success('添加成功')
          break
        case 'buy':
          push('/')
          break
        case 'cancel':
          Modal.confirm({
            title: '您确定要取消收藏该商品吗?',
            cancelText: '取消',
            okText: '确定',
            onOk: () => {
              message.success('取消成功')
            }
          })
          break
        default:
          break
      }
    },
    [push]
  )

  return (
    <div className='my-like-container'>
      <Header />
      <section className='container'>
        <List
          className='like-list'
          itemLayout='vertical'
          size='large'
          dataSource={listData}
          renderItem={item => (
            <List.Item
              className='li'
              key={item.title}
              actions={[
                <span onClick={() => handleClick('add')} className='action-item add-cart'>
                  加入购物车
                </span>,
                <span onClick={() => handleClick('buy')} className='action-item buy'>
                  立即购买
                </span>,
                <span onClick={() => handleClick('cancel')} className='action-item cancel-like'>
                  取消收藏
                </span>
              ]}
              extra={
                <div className='product-img'>
                  <img
                    src={BASE_IMG_URL + '/upload/image/20190705/20190705145336_6988.jpg'}
                    className='img'
                    alt='product'
                  />
                </div>
              }
            >
              <List.Item.Meta title={item.title} description={item.description} />
              {item.content}
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
