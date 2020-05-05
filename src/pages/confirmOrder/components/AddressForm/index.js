import React from 'react'
import { Modal, Form, Input } from 'antd'

const AddressForm = ({ visible, submit, onCancel }) => {
  const [form] = Form.useForm()

  const handleOnOk = React.useCallback(async () => {
    const values = await form.validateFields()
    form.resetFields()
    submit(values)
  }, [form, submit])

  return (
    <Modal
      visible={visible}
      title='Add New Address'
      okText='Add'
      cancelText='Cancel'
      onCancel={onCancel}
      onOk={handleOnOk}
    >
      <Form form={form} layout='vertical' name='addressForm'>
        <Form.Item
          name='name'
          label='Name'
          rules={[{ required: true, message: 'Please fill in the name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='phone'
          label='Phone'
          rules={[{ required: true, message: 'Please fill in the phone!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='address'
          label='Delivery Address'
          rules={[{ required: true, message: 'Please fill in the delivery address!' }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default AddressForm
