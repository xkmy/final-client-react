import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
import { Table, Radio } from 'antd'
// import Header from '../../components/Header'
// import request from '../../api/request'
// import './index.scss'
// import { Redirect } from 'react-router-dom'

// const OrderReport = () => {
//   const { role } = useSelector(state => state.user)
//   const [reportType, setReportType] = useState('daily')
//   const [data, setData] = useState([
//     {
//       count:1
//     }
//   ])
//   useEffect(() => {
//     ;(async () => {
//       const result = await request('/order', { report_type: reportType })
//       const { status, data } = result
//       if (status === 0) {
//         setData(data.count)
//       }
//     })()
//   }, [reportType])

//   const columns = [
//     {
//       title: 'Sales count',
//       dataIndex: 'count',
//       key: 'count'
//     }
//   ]

//   const handleChange = e => {
//     setReportType(e.target.value)
//   }

//   return (
//     <>
//       {role !== 'seller' ? (
//         <Redirect to='/' />
//       ) : (
//         <>
//           <Header />
//           <div className='order-list-table-container'>
//             <div className='condition'>
//               <span className='title'> Select date to view</span>
//               <Radio.Group onChange={handleChange}>
//                 <Radio value='daily'>daily</Radio>
//                 <Radio value='weekly'>weekly</Radio>
//                 <Radio value='monthly'>monthly</Radio>
//               </Radio.Group>
//             </div>
//             <Table columns={columns} dataSource={data} rowKey='count' />
//           </div>
//         </>
//       )}
//     </>
//   )
// }

// export default OrderReport

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: text => <a>{text}</a>
  },
  {
    title: 'Age',
    dataIndex: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address'
  }
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park'
  }
]

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name
  })
}

const Demo = () => {

  return (
    <div>
      <Table
        rowSelection={{
          ...rowSelection
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  )
}

export default Demo
