import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { viewOrderDetails } from '../../actions/orderActions'

const OrderDetailsScreen = (props) => {
  const viewOrderDetailsStore = useSelector(
    (store) => store.viewOrderDetailsStore
  )

  const myorder_id = props.location.state.myorder_id

  const dispatch = useDispatch()

  const onSellerHome = () => {
    props.history.push('/seller')
  }

  useEffect(() => {
    console.log('in use effect of viewOrderDetails')
    console.log('myorderid' + myorder_id)
    dispatch(viewOrderDetails(myorder_id))
  }, [])

  return (
    <div>
      <h2>
        <strong>Order Details Screen</strong>
      </h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Order Details ID</th>
            <th>MyOrder ID</th>
            <th>Product ID</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Rating</th>
            <th>Comment</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {viewOrderDetailsStore.response &&
            viewOrderDetailsStore.response.data &&
            viewOrderDetailsStore.response.data.length > 0 &&
            viewOrderDetailsStore.response.data.map((p) => {
              return (
                <tr>
                  <td>{p.orderdetails_id}</td>
                  <td>{p.myorder_id}</td>
                  <td>{p.product_id}</td>
                  <td>{p.price}</td>
                  <td>{p.quantity}</td>
                  <td>{p.rating}</td>
                  <td>{p.comment}</td>
                  <td>
                    <button
                      onClick={() => {
                        onSellerHome()
                      }}
                      className="btn btn-sm btn-success btn-add-to-cart">
                      Go To Seller Home
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

export default OrderDetailsScreen
