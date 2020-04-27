import React from 'react'
import { Menu, Button, Dropdown } from 'antd'
import './index.scss'

const menu = (
  <Menu>
    <Menu.Item>
      <span className='logout'>安全退出</span>
    </Menu.Item>
  </Menu>
)

const Header = () => {
  return (
    <div className='header-wrapper'>
      <div className='header-container'>
        <div className='menu'>首页</div>
        <div className='right'>
          <Dropdown overlay={menu}>
            <Button>xkmy</Button>
          </Dropdown>
        </div>
      </div>
    </div>
  )
}

export default Header
