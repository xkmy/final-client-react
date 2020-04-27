import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import './index.scss'

const Login = () => {
  const location = useLocation()
  console.log(location)
  const onFinish = (values) => {
    console.log(values)
  }

  return (
    <div className='login-wrapper'>
      <Form
        name='login-form'
        className='login-form'
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
          <Button type='primary' htmlType='submit' className='login-form-button'>
            登录
          </Button>
          <Link to='/register' className=' register'>
            没有账号?去注册!
          </Link>
        </Form.Item>
      </Form>
    </div>
  )
}

export default React.memo(Login)
