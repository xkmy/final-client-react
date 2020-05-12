import React from 'react'
import { useLocation, useHistory, Link, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Input, Button, Radio, message } from 'antd'
import request from '../../api/request'
import { login } from '../../store/actions'
import jwtDecode from 'jwt-decode'
import Cookies from 'js-cookie'
import './index.scss'

const Login = () => {
  const { pathname } = useLocation()
  const history = useHistory()
  const dispatch = useDispatch()
  const { logined } = useSelector(state => state.user)
  const onFinish = async values => {
    try {
      let registerUrl = ''
      const { identity } = values
      identity === 'buyer'
        ? (registerUrl = '/buyerLogin')
        : identity === 'seller'
        ? (registerUrl = '/sellerLogin')
        : identity === 'employee'
        ? (registerUrl = '/employeeLogin')
        : (registerUrl = '/buyerLogin')
      const result = await request(registerUrl, values)
      const { status, data } = result
      if (status === 0) {
        const { token } = data
        const decodedToken = jwtDecode(token)
        console.log(decodedToken)
        if (decodedToken) {
          const userInfo = JSON.parse(decodedToken.sub)
          const { username, role, seller_type } = userInfo
          console.log(userInfo)
          Cookies.set('token', token, { expires: 7 })
          Cookies.set('user', { username, role, seller_type, logined: true }, { expires: 7 })
          dispatch(login({ username, role, seller_type }))
          message.success('登录成功')
          history.replace(pathname)
        }
      } else {
        message.error('登录失败,用户不存在或账号密码错误')
      }
    } catch (error) {
      message.error('Login failed!')
    }
  }

  return (
    <>
      {logined && <Redirect to='/' />}
      <div className='register-container'>
        <div className='login-wrapper'>
          <div className='login-form'>
            <div className='title'>欢迎登录乐器商城</div>
            <Form
              name='login-form'
              layout='vertical'
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
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
                name='username'
                label='username'
                rules={[{ required: true, message: 'Please input your username' }]}
              >
                <Input placeholder='Please input your username' />
              </Form.Item>
              <Form.Item
                name='password'
                label='password'
                rules={[{ required: true, message: 'Please enter the password' }]}
              >
                <Input type='password' placeholder='Please enter the password' />
              </Form.Item>
              <Form.Item>
                <Button type='primary' htmlType='submit' className='login-form-button'>
                  Login
                </Button>
                <Link to='/register' className=' register'>
                  Don't have an account? Go to register!
                </Link>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default React.memo(Login)
