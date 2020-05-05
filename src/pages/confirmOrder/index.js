import React, { useState, useCallback } from 'react'
import OrderHeader from '../../components/OrderHeader'
import AddAddressForm from './components/AddressForm'
import OrderProduct from './components/OrderProduct'
import Footer from '../../components/Footer'
import './index.scss'

const ConfirmOrder = () => {
  const [selected, setSelected] = useState(1)
  const [addressList, setAddress] = useState([
    {
      id: 1,
      username: 'xkmy',
      phone: '1888888888',
      address: 'Pennsylvania'
    }
  ])
  const [isShowAddModal, setIsShowAddModal] = useState(false)

  const handleAdd = useCallback(() => {
    setIsShowAddModal(true)
  }, [])

  const submit = useCallback(values => {
    setIsShowAddModal(false)
    console.log(values)
  }, [])

  const onCancel = useCallback(() => {
    setIsShowAddModal(false)
  }, [])

  return (
    <div className='confirm-container'>
      <div className='container'>
        <OrderHeader
          title='Order Confirmation'
          content='  Please fill in the delivery address carefully'
        />
        <div className='harvest-address'>
          <div className='title'>Harvest Address</div>
          <div className='order-wrapper'>
            {addressList.map(item => (
              <div key={item.id} className={`address ${item.id === selected ? 'selected' : ''}`}>
                <p className='item name'>{item.username}</p>
                <p className='item'>{item.phone}</p>
                <p className='item'>{item.address}</p>
              </div>
            ))}
            <div className='add-new-address'>
              <div onClick={handleAdd} className='add-img' />
              <div>add new address</div>
            </div>

            <AddAddressForm visible={isShowAddModal} submit={submit} onCancel={onCancel} />
          </div>
        </div>
        <OrderProduct />
        <Footer />
      </div>
    </div>
  )
}
export default React.memo(ConfirmOrder)
