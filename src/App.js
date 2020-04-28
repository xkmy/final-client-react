import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'
import routes from './router'
import renderRouter from './router/renderRouter'

function App() {
  const { logined } = useSelector(state => state.user)

  return (
    <div style={{ height: '100%' }}>
      <BrowserRouter>{renderRouter(routes, logined, '/login')}</BrowserRouter>
    </div>
  )
}

export default App
