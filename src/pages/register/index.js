import React, { useState, useCallback } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Form, Input, Button, Radio, Modal, message } from 'antd'
import request from '../../api/request'
import { CheckOutlined } from '@ant-design/icons'
import './index.scss'

const Register = () => {
  const { replace } = useHistory()
  const [identity, setIdentity] = useState('buyer')

  const handleSetRegisterType = e => {
    setIdentity(e.target.value)
  }

  const buyerOnFinish = useCallback(
    async values => {
      try {
        const result = await request('/buyer', values, 'POST')
        const { status } = result
        if (status === 0) {
          Modal.confirm({
            icon: <CheckOutlined />,
            title: 'Register successfully, go to login?',
            onOk: () => {
              replace('/login')
            }
          })
        }
      } catch (error) {
        message.error('Registration failed!')
      }
    },
    [replace]
  )

  const sellerOnFinish = useCallback(
    async values => {
      values.seller_type = 2
      try {
        const result = await request('/seller', values, 'POST')
        const { status } = result
        if (status === 0) {
          Modal.confirm({
            icon: <CheckOutlined />,
            title: 'Register successfully, go to login?',
            onOk: () => {
              replace('/login')
            }
          })
        }
      } catch (error) {
        message.error('Registration failed!')
      }
    },
    [replace]
  )

  const employeerOnFinish = useCallback(
    async values => {
      try {
        const result = await request('/employee', values, 'POST')
        const { status } = result
        if (status === 0) {
          Modal.confirm({
            icon: <CheckOutlined />,
            title: 'Register successfully, go to login?',
            onOk: () => {
              replace('/login')
            }
          })
        }
      } catch (error) {
        message.error('Registration failed!')
      }
    },
    [replace]
  )

  return (
    <div className='register-container'>
      <div className='title'>欢迎注册乐器商城</div>
      <div className='register-wrapper'>
        <div>
          <Radio.Group
            onChange={handleSetRegisterType}
            defaultValue='buyer'
            className='register-type'
          >
            <Radio value='buyer'>buyer</Radio>
            <Radio value='seller'>seller</Radio>
            <Radio value='employee'>employee</Radio>
          </Radio.Group>
          {identity === 'buyer' ? (
            <Form
              name='buyer-register-form'
              className='form'
              onFinish={buyerOnFinish}
              layout='vertical'
            >
              <Form.Item
                name='name'
                label='RealName'
                rules={[{ required: true, message: 'Please input your real name' }]}
              >
                <Input placeholder='Please input your real name' />
              </Form.Item>
              <Form.Item
                name='username'
                label='NickName'
                rules={[{ required: true, message: 'Please enter a nickname' }]}
              >
                <Input placeholder='Please enter a nickname' />
              </Form.Item>
              <Form.Item
                name='password'
                label='Password'
                rules={[{ required: true, message: 'Please enter the password' }]}
              >
                <Input type='password' placeholder='Please enter the password' />
              </Form.Item>
              <Form.Item
                name='buyer_address'
                label='Address'
                rules={[{ required: true, message: 'Please enter the delivery address' }]}
              >
                <Input placeholder='Please enter the delivery address' />
              </Form.Item>
              <Form.Item
                name='buyer_phone'
                label='HarvestAddress'
                rules={[{ required: true, message: 'Please enter the call' }]}
              >
                <Input placeholder='Please enter the call' />
              </Form.Item>
              <Form.Item
                name='buyer_gender'
                label='Gender'
                rules={[{ required: true, message: 'Please enter the gender' }]}
              >
                <Radio.Group>
                  <Radio value={0}>man</Radio>
                  <Radio value={1}>woman</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                name='buyer_email'
                label='Email'
                rules={[{ required: true, message: 'Please input your email' }]}
              >
                <Input placeholder='Please input your email' />
              </Form.Item>
              <Form.Item>
                <Button type='primary' htmlType='submit' className='register-form-button'>
                  Register
                </Button>
                <Link to='/login' className='go-login'>
                  Already have an account? Go to login!
                </Link>
              </Form.Item>
            </Form>
          ) : identity === 'seller' ? (
            <Form
              name='seller-register-form'
              className='form'
              onFinish={sellerOnFinish}
              layout='vertical'
            >
              <Form.Item
                name='name'
                label='RealName'
                rules={[{ required: true, message: 'Please input your real name' }]}
              >
                <Input placeholder='Please input your real name' />
              </Form.Item>
              <Form.Item
                name='username'
                label='NickName'
                rules={[{ required: true, message: 'Please enter a nickname' }]}
              >
                <Input placeholder='Please enter a nickname' />
              </Form.Item>
              <Form.Item
                name='password'
                label='Password'
                rules={[{ required: true, message: 'Please enter the password' }]}
              >
                <Input type='password' placeholder='Please enter the password' />
              </Form.Item>
              {/* <Form.Item
                name='seller_type'
                label='Seller Type'
                rules={[{ required: true, message: 'Please enter the Seller type' }]}
              >
                <Radio.Group>
                  <Radio value={1}>seller1</Radio>
                  <Radio value={1}>seller2</Radio>
                </Radio.Group>
              </Form.Item> */}
              <Form.Item
                name='seller_tel'
                label={`seller's phone number`}
                rules={[{ required: true, message: `Please enter the seller's phone number` }]}
              >
                <Input placeholder='Please enter the phone number' />
              </Form.Item>
              <Form.Item>
                <Button type='primary' htmlType='submit' className='register-form-button'>
                  Register
                </Button>
                <Link to='/login' className='go-login'>
                  Already have an account? Go to login!
                </Link>
              </Form.Item>
            </Form>
          ) : (
            <Form
              name='employee-register-form'
              className='form'
              onFinish={employeerOnFinish}
              layout='vertical'
            >
              <Form.Item
                name='name'
                label='RealName'
                rules={[{ required: true, message: 'Please input your real name' }]}
              >
                <Input placeholder='Please input your real name' />
              </Form.Item>
              <Form.Item
                name='username'
                label='NickName'
                rules={[{ required: true, message: 'Please enter a nickname' }]}
              >
                <Input placeholder='Please enter a nickname' />
              </Form.Item>
              <Form.Item
                name='password'
                label='Password'
                rules={[{ required: true, message: 'Please enter the password' }]}
              >
                <Input type='password' placeholder='Please enter the password' />
              </Form.Item>
              <Form.Item>
                <Button type='primary' htmlType='submit' className='register-form-button'>
                  Register
                </Button>
                <Link to='/login' className='go-login'>
                  Already have an account? Go to login!
                </Link>
              </Form.Item>
            </Form>
          )}
        </div>
      </div>
    </div>
  )
}

export default React.memo(Register)
