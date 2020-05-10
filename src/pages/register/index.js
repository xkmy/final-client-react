import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Form, Input, Button, Radio, Modal, message } from 'antd'
import request from '../../api/request'
import { CheckOutlined } from '@ant-design/icons'
import './index.scss'

const Register = () => {
  const { replace } = useHistory()
  const onFinish = async values => {
    try {
      let registerUrl = ''
      const { identity } = values
      identity === 'buyer'
        ? (registerUrl = '/buyer')
        : identity === 'seller'
        ? (registerUrl = '/seller')
        : identity === 'employee'
        ? (registerUrl = '/employee')
        : (registerUrl = '')
      const result = await request(registerUrl, values, 'POST')
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
  }

  return (
    <div className='register-container'>
      <div className='title'>欢迎注册乐器商城</div>
      <div className='register-wrapper'>
        <Form name='register-form' className='register-form' onFinish={onFinish} layout='vertical'>
          <Form.Item
            name='identity'
            label='SelectIdentity'
            rules={[{ required: true, message: 'Please select identity' }]}
          >
            <Radio.Group>
              <Radio value='buyer'>buyer</Radio>
              <Radio value='seller'>seller</Radio>
              <Radio value='employee'>employee</Radio>
            </Radio.Group>
          </Form.Item>
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
            <Link to='/login' className='register'>
              Already have an account? Go to login!
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default React.memo(Register)
