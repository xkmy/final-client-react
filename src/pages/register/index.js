import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import './index.scss'

const Register = () => {
  const onFinish = (values) => {
    console.log(values)
  }

  return (
    <div className='register-wrapper'>
      <Form
        name='register-form'
        className='register-form'
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item name='username' rules={[{ required: true, message: '请输入用户名' }]}>
          <Input prefix={<UserOutlined />} placeholder='Username' />
        </Form.Item>
        <Form.Item name='password' rules={[{ required: true, message: '请输入密码' }]}>
          <Input prefix={<LockOutlined />} type='password' placeholder='Password' />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit' className='register-form-button'>
            注册
          </Button>
          <Link to='/login' className='register'>
            已有账号?去登陆!
          </Link>
        </Form.Item>
      </Form>
    </div>
  )
}

export default React.memo(Register)
