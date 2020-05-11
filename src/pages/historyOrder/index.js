import React, { useEffect, useState } from 'react'
// import { List, Modal, message } from 'antd'
import { List } from 'antd'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
// import { BASE_IMG_URL } from '../../constants'
import request from '../../api/request'
import './index.scss'

const HistoryOrder = () => {
  const [historyOrder, setHistoryOrder] = useState([])

  useEffect(() => {
    ;(async () => {
      const result = await request('/order')
      const { status, data } = result
      if (status === 0) {
        console.log(data.orders)
        setHistoryOrder(data.orders)
      }
    })()
  }, [])

  // const handleReduce = useCallback(() => {
  //   Modal.confirm({
  //     title: '您确定要删除该订单吗?',
  //     cancelText: '取消',
  //     okText: '确定',
  //     onOk: () => {
  //       message.success('删除成功')
  //     }
  //   })
  // }, [])

  return (
    <div className='history-order-container'>
      <Header />
      <section className='container'>
        <List
          className='order-list'
          itemLayout='vertical'
          size='large'
          dataSource={historyOrder}
          renderItem={item => (
            <List.Item
              className='li'
              key={item.product_name}
              actions={[
                // <span onClick={handleReduce} className='action-item'>
                //   删除订单
                // </span>
              ]}
              extra={
                <div className='product-img'>
                  <img src={item.product_image} className='img' alt='product' />
                </div>
              }
            >
              <div className='price-title'>{item.product_name}</div>
              <div>
                unit price:<span className='price'>${item.product_price}</span>
              </div>
              <div>
                quantity:<span className='price'>{item.product_num}</span>
              </div>
              <div>total price:{item.total_price}</div>
            </List.Item>
          )}
        />
        <Footer />
      </section>
    </div>
  )
}
export default React.memo(HistoryOrder)
