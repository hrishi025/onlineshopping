import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMyOrderList, updateMyOrder } from '../../actions/myorderActions'

const UserMyOrderScreen = (props) => {
  const viewMyOrderStore = useSelector((store) => store.viewMyOrderStore)
  const updateMyOrderStore = useSelector((store) => store.updateMyOrderStore)
  const onOrderDetails = (p) => {
    props.history.push({
      pathname: '/order-details',
      state: p, // your data array of objects
    })
  }
  const onCancelOrder = (p) => {
    console.log('inside cancel my order' + p)
    dispatch(updateMyOrder(p.myorder_id, 2))
  }

  const dispatch = useDispatch()

  useEffect(() => {
    console.log('in use effect of MyOrderScreen')
    dispatch(getMyOrderList())
  }, [])

  useEffect(() => {
    dispatch(getMyOrderList())
  }, [
    updateMyOrderStore.response,
    updateMyOrderStore.error,
    updateMyOrderStore.loading,
  ])

  return (
    <div className="container">
      <div id="wrapper">
        <div className="d-flex flex-column" id="content-wrapper">
          <div id="content">
            <div className="container-fluid">
              <div className="card shadow">
                <div className="card-header py-3">
                  <p className="text-primary m-0 fw-bold">User Order List</p>
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
                                <td>{p.orderDate}</td>
                                <td>{p.status}</td>
                                <td>
                                  {p.status == 'not delivered' && (
                                    <button
                                      onClick={() => {
                                        onCancelOrder(p)
                                      }}
                                      className="btn btn-sm btn-danger mx-2">
                                      Cancel
                                    </button>
                                  )}
                                  <button
                                    onClick={() => {
                                      onOrderDetails(p)
                                    }}
                                    className="btn btn-sm btn-success mx-2">
                                    Order Details
                                  </button>
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

export default UserMyOrderScreen
