import React, { useEffect, useState } from 'react'
import { Table, Tag, Radio } from 'antd'
import Header from '../../components/Header'
import request from '../../api/request'
import './index.scss'

const OrderReport = () => {
  const [reportType, setReportType] = useState('daily')
  const [data, setData] = useState([])
  useEffect(() => {
    ;(async () => {
      const result = await request('/order', { report_type: reportType })
      const { status, data } = result
      if (status === 0) {
        setData(data.count)
      }
    })()
  }, [reportType])

  const columns = [
    {
      title: 'count',
      dataIndex: 'count',
      key: 'count'
    }
  ]

  const handleChange = e => {
    setReportType(e.target.value)
  }

  return (
    <>
      <Header />
      <div className='order-list-table-container'>
        <div className='condition'>
          <span className='title'> Select date to view</span>
          <Radio.Group onChange={handleChange}>
            <Radio value='daily'>daily</Radio>
            <Radio value='weekly'>weekly</Radio>
            <Radio value='monthly'>monthly</Radio>
          </Radio.Group>
        </div>
        <Table columns={columns} dataSource={data} rowKey='count' />
      </div>
    </>
  )
}

export default OrderReport
