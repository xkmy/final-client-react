import React, { memo, useCallback } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Menu, Dropdown } from 'antd'
import { logout } from '../../store/actions'
import './index.scss'

const Header = () => {
  const { username } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleExit = useCallback(() => {
    history.replace('/login')
    dispatch(logout())
  }, [history, dispatch])

  const menu = (
    <Menu>
      <Menu.Item>
        <span onClick={handleExit} className='logout'>
          安全退出
        </span>
      </Menu.Item>
    </Menu>
  )

  return (
    <div className='header-wrapper'>
      <div className='header-container'>
        <div className='menu-wrapper'>
          <div className='menu'>
            <Link to='/' className='menu-item'>
              首页
            </Link>
            <Link to='/login' className='menu-item'>
              登录
            </Link>
            <Link to='/register' className='menu-item'>
              注册
            </Link>
          </div>
        </div>
        <div className='right'>
          <Dropdown overlay={menu} placement='bottomCenter'>
            <span>{username}</span>
          </Dropdown>
        </div>
      </div>
    </div>
  )
}

export default memo(Header)
