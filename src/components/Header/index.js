import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Menu, Dropdown } from 'antd'
import { logout } from '../../store/actions'
import './index.scss'

const Header = () => {
  const { username } = useSelector(state => state.user)
  const dispatch = useDispatch()

  const menuList = [
    { path: '/', name: '首页' },
    { path: '/all-product', name: '商品' },
    { path: '/cart', name: '购物车' },
    { path: '/history-order', name: '历史订单' },
    { path: '/my-like', name: '我的收藏' }
  ]

  const menu = (
    <Menu>
      <Menu.Item>
        <span onClick={() => dispatch(logout())} className='logout'>
          安全退出
        </span>
      </Menu.Item>
    </Menu>
  )

  return (
    <div className='header-wrapper'>
      <div className='header-container'>
        <div className='menu'>
          {menuList.map((item, index) => (
            <NavLink
              exact
              to={item.path}
              key={index}
              activeClassName='selected'
              className='menu-item'
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div>
          <span className='welcome'>欢迎来到乐器商城!</span>
          {username ? (
            <Dropdown overlay={menu}>
              <span>{username}</span>
            </Dropdown>
          ) : (
            <span>
              <NavLink to='/login'>登录</NavLink> |<NavLink to='/register'> 注册</NavLink>
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default React.memo(Header)
