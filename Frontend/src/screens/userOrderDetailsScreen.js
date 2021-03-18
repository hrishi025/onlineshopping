import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { viewOrderDetails } from '../actions/orderActions'

const UserOrderDetailsScreen = (props) => {
  const viewOrderDetailsStore = useSelector(
    (store) => store.viewOrderDetailsStore
  )
  const myorder_id = props.location.state.myorder_id

  const dispatch = useDispatch()

  const onRateProduct = (p) => {
    props.history.push({
      pathname: '/rate-product',
      state: p, // your data array of objects
    })
  }

  useEffect(() => {
    console.log('in use effect of User viewOrderDetails')
    dispatch(viewOrderDetails(myorder_id))
  }, [])

  const goBackHandler = () => {
    props.history.push('/user-myorder')
  }

  return (
    // <div>
    //   <h2>
    //     <strong>User's Order Details Screen</strong>
    //   </h2>
    //   <table className="table table-striped">
    //     <thead>
    //       <tr>
    // <th>Product Name</th>
    // <th>Price</th>
    // <th>Quantity</th>
    // <th>Rating</th>
    // <th>Comment</th>
    // <th>Action</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {viewOrderDetailsStore.response &&
    //         viewOrderDetailsStore.response.data &&
    //         viewOrderDetailsStore.response.data.length > 0 &&
    //         viewOrderDetailsStore.response.data.map((p) => {
    //           return (
    //             <tr>
    // <td>{p.prod_title}</td>
    // <td>{p.price}</td>
    // <td>{p.quantity}</td>
    // <td>{p.rating}</td>
    // <td>{p.comment}</td>
    // <td>
    //   {p.rating != null ||
    //     (p.comment != null && (
    //       <button
    //         onClick={() => {
    //           onRateProduct(p)
    //         }}
    //         className="btn btn-sm btn-success btn-add-to-cart">
    //         Rate Product
    //       </button>
    //     ))}
    // </td>
    //             </tr>
    //           )
    //         })}
    //     </tbody>
    //   </table>
    // </div>
    <div className="container">
      <div className="text-left border border-light p-3 mb-2">
        <button
          className="text-left btn btn-outline-success"
          style={{ flex: 'left' }}
          onClick={goBackHandler}>
          Go Back
        </button>
      </div>
      <div id="wrapper">
        <div className="d-flex flex-column" id="content-wrapper">
          <div id="content">
            <div className="container-fluid">
              <div className="card shadow">
                <div className="card-header py-3">
                  <p className="text-primary m-0 fw-bold">
                    User's Order Details Screen
                  </p>
                </div>
                <div className="card-body">
                  <div
                    className="table-responsive table mt-2"
                    id="dataTable"
                    role="grid"
                    aria-describedby="dataTable_info">
                    <table className="table my-0" id="dataTable">
                      <thead>
                        <tr>
                          <th>Product Name</th>
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
                                <td>{p.prod_title}</td>
                                <td>{p.price}</td>
                                <td>{p.quantity}</td>
                                <td>{p.rating}</td>
                                <td>{p.comment}</td>{' '}
                                <td>
                                  {(p.rating == null || p.comment == null) && (
                                    <button
                                      onClick={() => {
                                        onRateProduct(p)
                                      }}
                                      className="btn btn-sm btn-success btn-add-to-cart">
                                      Rate Product
                                    </button>
                                  )}
                                </td>
                              </tr>
                            )
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserOrderDetailsScreen
