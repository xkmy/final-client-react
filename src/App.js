import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import routes from './router'
import renderRouter from './router/renderRouter'

function App() {
  const logined = true

  return (
    <div style={{ height: '100%' }}>
      <BrowserRouter>{renderRouter(routes, logined, '/login')}</BrowserRouter>
    </div>
  )
}

export default App
