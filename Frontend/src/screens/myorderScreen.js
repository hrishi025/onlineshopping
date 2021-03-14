import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMyOrderList, updateMyOrder } from '../actions/myorderActions'

const MyOrderScreen = (props) => {
  const viewMyOrderStore = useSelector((store) => store.viewMyOrderStore)

  const onCancelOrder = (p) => {
    console.log('inside cancel my order' + p)
    dispatch(updateMyOrder(p.myorder_id, 2))

    alert('Order Cancelled Successfully')
    props.history.push('/seller')
  }

  const onDeliverOrder = (p) => {
    console.log('inside Deliver my order' + p)
    dispatch(updateMyOrder(p.myorder_id, 1))

    alert('Order Delivered Successfully')
    props.history.push('/seller')
  }

  const { response, loading, error } = viewMyOrderStore

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
                      className="btn btn-sm btn-danger btn-add-to-cart">
                      Cancel
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        onDeliverOrder(p)
                      }}
                      className="btn btn-sm btn-success btn-add-to-cart">
                      Deliver Order
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

export default MyOrderScreen
