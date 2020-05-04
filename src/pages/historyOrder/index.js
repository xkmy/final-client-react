import React, { useCallback } from 'react'
import { List, Modal, message } from 'antd'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { BASE_IMG_URL } from '../../constants'
import './index.scss'

const HistoryOrder = () => {
  const listData = []
  for (let i = 0; i < 5; i++) {
    listData.push({
      title: '钢琴',
      description: (
        <div>
          <div>订单日期: 2020-4-20</div>
          <div className='price-wrapper'>
            订单金额: ¥5500
          </div>
        </div>
      ),
      content: '欧米勒T1系列立式钢琴儿童家庭学校演奏初学专业钢琴'
    })
  }

  const handleReduce = useCallback(() => {
    Modal.confirm({
      title: '您确定要删除该订单吗?',
      cancelText: '取消',
      okText: '确定',
      onOk: () => {
        message.success('删除成功')
      }
    })
  }, [])

  return (
    <div className='history-order-container'>
      <Header />
      <section className='container'>
        <List
          className='order-list'
          itemLayout='vertical'
          size='large'
          dataSource={listData}
          renderItem={item => (
            <List.Item
              className='li'
              key={item.title}
              actions={[
                <span onClick={handleReduce} className='action-item'>
                  删除订单
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
      </section>
    </div>
  )
}
export default React.memo(HistoryOrder)
