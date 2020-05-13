import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Table, Radio } from 'antd'
import Header from '../../components/Header'
import request from '../../api/request'
import './index.scss'
import { Redirect } from 'react-router-dom'

const OrderReport = () => {
  const { role } = useSelector(state => state.user)
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
      {role !== 'seller' ? (
        <Redirect to='/' />
      ) : (
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
      )}
    </>
  )
}

export default OrderReport
