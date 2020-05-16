import React from 'react'
import { Table, Space, message } from 'antd'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import request from '../../api/request'
import './index.scss'

const Check = () => {
  const [checkedList, setCheckedList] = React.useState([])

  const getData = React.useCallback(async () => {
    const result = await request('/check', { report_type: 'monthly' })
    const { status, data } = result
    if (status === 0) {
      setCheckedList(data.checkByEmpId)
    }
    console.log(result)
  }, [])

  React.useEffect(() => {
    getData()
  }, [getData])

  const handleChangeStatus = async (id, check_result) => {
    const result = await request('/check/' + id, { check_result }, 'PUT')
    const { status } = result
    if (status === 0) {
      getData()
      message.success('Status changed successfully')
    } else {
      message.warning('Status changed failed')
    }
  }

  const colunms = [
    {
      title: 'product name',
      dataIndex: 'product_name',
      key: 'product_name'
    },
    {
      title: 'product price',
      dataIndex: 'product_price',
      key: 'product_price'
    },
    {
      title: 'check status',
      key: 'check_status',
      render: ({ check_status }) => (
        <div className='check-status'>
          {check_status === '0' ? (
            '未审核'
          ) : check_status === '1' ? (
            <span className='good'>通过</span>
          ) : (
            '未通过'
          )}
        </div>
      )
    },
    {
      title: 'product_image',
      dataIndex: 'product_image',
      render: productImg => (
        <div className='product-img'>
          <img className='img' src={productImg} alt='' />
        </div>
      )
    },
    {
      title: 'Action',
      key: 'action',
      render: ({ check_id }) => (
        <Space size='middle'>
          <span onClick={() => handleChangeStatus(check_id, 1)} className='approved'>
            Approved
          </span>
          <span onClick={() => handleChangeStatus(check_id, 2)} className='not-approved'>
            Not approved
          </span>
        </Space>
      )
    }
  ]

  return (
    <div className='check-container'>
      <Header />
      <div className='container'>
        <Table columns={colunms} dataSource={checkedList} rowKey='product_id' className='table' />
        <Footer />
      </div>
    </div>
  )
}

export default React.memo(Check)
