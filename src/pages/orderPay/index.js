import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Result, Button } from 'antd'
import OrderHeader from '../../components/OrderHeader'
import './index.scss'

const Order = () => {
  return (
    <div className='order-pay-container'>
      <OrderHeader
        title='Order settlement'
        content='Please beware of phishing links or scam calls'
      />
      <div className='container'>
        <Card className='result'>
          <Result
            status='success'
            title='Order settled successfully!'
            extra={[
              <Button type='primary' key='buy'>
                <Link to='/'>Keep buying other</Link>
              </Button>
            ]}
          />
        </Card>
      </div>
    </div>
  )
}
export default React.memo(Order)
