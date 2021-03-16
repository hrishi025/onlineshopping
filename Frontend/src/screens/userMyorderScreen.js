import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMyOrderList, updateMyOrder } from '../actions/myorderActions'

const UserMyOrderScreen = (props) => {
  const viewMyOrderStore = useSelector((store) => store.viewMyOrderStore)

  const onOrderDetails = (p) => {
    props.history.push({
      pathname: '/user-order-details',
      state: p, // your data array of objects
    })
  }
  const onCancelOrder = (p) => {
    console.log('inside cancel my order' + p)
    dispatch(updateMyOrder(p.myorder_id, 2))

    alert('Order Cancelled Successfully')
    props.history.push('/seller')
  }

  const dispatch = useDispatch()

  useEffect(() => {
    console.log('in use effect of MyOrderScreen')
    dispatch(getMyOrderList())
  }, [])

  return (
    <div>
      My Orders Screen
      <table className="table table-striped">
        <thead>
          <tr>
            <th>MyOrder ID</th>
            <th>Order Date</th>
            <th>Order Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {viewMyOrderStore.response &&
            viewMyOrderStore.response.data &&
            viewMyOrderStore.response.data.length > 0 &&
            viewMyOrderStore.response.data.map((p) => {
              return (
                <tr>
                  <td>{p.myorder_id}</td>
                  <td>{p.orderDate}</td>
                  <td>{p.status}</td>
                  <td>
                    <button
                      onClick={() => {
                        onCancelOrder(p)
                      }}
                      className="btn btn-sm btn-danger">
                      Cancel
                    </button>

                    <button
                      onClick={() => {
                        onOrderDetails(p)
                      }}
                      className="btn btn-sm btn-success">
                      View Order Details
                    </button>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default UserMyOrderScreen
