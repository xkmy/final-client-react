import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import routes from './router'
import renderRouter from './router/renderRouter'

function App() {
  const logined = true

  return (
    <div style={{ height: '100%' }}>
      <Provider store={store}>
        <BrowserRouter>{renderRouter(routes, logined, '/login')}</BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
