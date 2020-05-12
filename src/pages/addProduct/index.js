import React from 'react'
import { useSelector } from 'react-redux'
import { Form, Select, Input, Button, message } from 'antd'
import Header from '../../components/Header'
import { MUSICAL_INSTRUMENT_TYPE } from '../../constants'
import request from '../../api/request'
import './index.scss'
import { Redirect } from 'react-router-dom'

const AddProduct = () => {
  const { role } = useSelector(state => state.user)
  const [form] = Form.useForm()

  const onFinish = async values => {
    const result = await request('/product', values, 'POST')
    const { status } = result
    if (status === 0) {
      message.success('Added successfully')
    } else {
      message.error('add failed')
    }
  }

  return (
    <>
      {role !== 'seller' ? (
        <Redirect to='/' />
      ) : (
        <>
          <Header />
          <Form form={form} onFinish={onFinish} layout='vertical' className='add-product-form'>
            <Form.Item
              name='product_type'
              rules={[{ required: true, message: 'Please enter the product type!' }]}
              label='product type'
            >
              <Select>
                {MUSICAL_INSTRUMENT_TYPE.map(item =>
                  item.name === '全部' ? null : (
                    <Select.Option value={item.type} key={item.id}>
                      {item.name}
                    </Select.Option>
                  )
                )}
              </Select>
            </Form.Item>
            <Form.Item
              name='product_price'
              label='product price'
              rules={[{ required: true, message: 'Please enter the product price!' }]}
            >
              <Input placeholder='product price' />
            </Form.Item>
            <Form.Item
              name='product_image'
              label='product picture path'
              rules={[{ required: true, message: 'Please enter the product  picture path!' }]}
            >
              <Input.TextArea rows={2} placeholder='product online path' />
            </Form.Item>
            <Form.Item
              name='product_name'
              label='product name'
              rules={[{ required: true, message: 'Please enter the Picture full online path!' }]}
            >
              <Input placeholder='Picture full online path' />
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit' className='submit'>
                Add
              </Button>
            </Form.Item>
          </Form>
        </>
      )}
    </>
  )
}

export default React.memo(AddProduct)
