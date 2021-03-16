import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from 'recharts'
import {
  getPayment,
  getRating,
  getMaxSalesProduct,
  getMonthWiseRevenue,
} from '../../actions/adminDashBoardActions'

const AdminScreen = (props) => {
  // const cartItemsStore = useSelector((store) => store.cartItemsStore);
  // const { response, loading, error } = cartItemsStore;

  const paymentStore = useSelector((store) => store.paymentStore)
  const { response, loading, error } = paymentStore
  //const  { TotalRevenue } = paymentStore.response

  const ratingStore = useSelector((store) => store.ratingStore)

  const maxSaleProductStore = useSelector((store) => store.maxSaleProductStore)

  const monthWiseRevenueStore = useSelector(
    (store) => store.monthWiseRevenueStore
  )
  const dispatch = useDispatch()

  const chartData = monthWiseRevenueStore

  useEffect(() => {
    console.log('in use effect')
    //dispatch(getAllCartItems());
    dispatch(getPayment())
    dispatch(getRating())
    dispatch(getMaxSalesProduct())
    dispatch(getMonthWiseRevenue())
  }, [])

  return (
    <div>
      <table className="table table-bordered table-hover">
        <tr>
          <td>
            <table style={{ width: '100%' }}>
              <tr>
                <td>
                  <div>
                    <div className="mb-1">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label">
                        <button className="btn btn-secondary btn-admin-fn shadow-lg p-3 mb-3 bg-black rounded">
                          {' '}
                          <Link className="link" to="/get-users">
                            <span className="nav-link">
                              <strong>Show All User</strong>
                            </span>
                          </Link>
                        </button>
                      </label>
                    </div>
                  </div>
                </td>

                <td>
                  <div>
                    <div className="mb-1">
                      <label for="exampleFormControlInput1" class="form-label">
                        <button className="btn btn-secondary btn-admin-fn shadow-lg p-3 mb-3 bg-black rounded">
                          <Link className="link" to="/get-seller">
                            <span className="nav-link">
                              <strong>Show All Seller</strong>
                            </span>
                          </Link>
                        </button>
                      </label>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
            <table style={{ width: '100%' }}>
              <tr>
                <td>
                  <div>
                    <div class="mb-1">
                      <label for="exampleFormControlInput1" class="form-label">
                        <button className="btn btn-secondary btn-admin-fn shadow-lg p-3 mb-3 bg-black rounded">
                          <Link className="link" to="/get-product-admin">
                            <span className="nav-link">
                              <strong>Show All Product</strong>
                            </span>
                          </Link>
                        </button>
                      </label>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="mb-1">
                    <label for="exampleFormControlInput1" class="form-label">
                      <button className="btn btn-secondary btn-admin-fn shadow-lg p-3 mb-3 bg-black rounded">
                        <Link className="link" to="/show-company">
                          <span className="nav-link">
                            <strong>show Companies</strong>
                          </span>
                        </Link>
                      </button>
                    </label>
                  </div>
                </td>
              </tr>
            </table>
            <table style={{ width: '100%' }}>
              <tr>
                <td>
                  <div class="mb-1">
                    <label for="exampleFormControlInput1" class="form-label">
                      <button className="btn btn-secondary btn-admin-fn shadow-lg p-3 mb-3 bg-black rounded">
                        <Link className="link" to="/get-category">
                          <span className="nav-link">
                            <strong>Show Categories</strong>
                          </span>
                        </Link>
                      </button>
                    </label>
                  </div>
                </td>
                <td>
                  <div class="mb-1">
                    <label for="exampleFormControlInput1" class="form-label">
                      <button className="btn btn-secondary btn-admin-fn shadow-lg p-3 mb-3 bg-black rounded">
                        <Link className="link" to="/admin-order-details">
                          <span className="nav-link">
                            <strong>Show All Orders</strong>
                          </span>
                        </Link>
                      </button>
                    </label>
                  </div>
                </td>
              </tr>
            </table>
            <table>
              <tr>
                <td style={{ width: '70px' }}>
                  <div className="card-container">
                    <div className="card-link bg-success mb-4">
                      <div className="card-header">Total Revenue</div>
                      <div className="revenue-div">
                        {paymentStore.response &&
                          paymentStore.response.data &&
                          paymentStore.response.data.length >= 0 &&
                          paymentStore.response.data.map((p) => {
                            return (
                              <div>
                                <div>₹ {p.TotalRevenue}</div>
                              </div>
                            )
                          })}
                      </div>
                    </div>
                  </div>
                </td>
                <td style={{ width: '70px' }}>
                  <div className="card-container">
                    <div className="card-link bg-success mb-4">
                      <div className="card-header">Customer Satisfaction</div>
                      <div className="revenue-div">
                        {ratingStore.response &&
                          ratingStore.response.data &&
                          ratingStore.response.data.length >= 0 &&
                          ratingStore.response.data.map((p) => {
                            return (
                              <div>
                                <div>{p.Customer_satisfaction}%</div>
                              </div>
                            )
                          })}
                      </div>
                    </div>
                  </div>
                </td>
                <td style={{ width: '400px' }}>
                  <table>
                    <div className="card-container">
                      <div className="card-link bg-success mb-4">
                        <div className="card-header">
                          <h3>
                            <strong>Max Sold Product</strong>
                          </h3>
                        </div>
                        <tr>
                          <td>Product Title</td>
                          <td>Qty Sold</td>
                        </tr>
                        <div className="revenue-div">
                          {maxSaleProductStore.response &&
                            maxSaleProductStore.response.data &&
                            maxSaleProductStore.response.data.length >= 0 &&
                            maxSaleProductStore.response.data.map((p) => {
                              return (
                                <tr>
                                  <div>
                                    <td>{p.prod_title}</td>
                                    <td>{p.no_of_sale_product}</td>
                                  </div>
                                </tr>
                              )
                            })}
                        </div>
                      </div>
                    </div>
                  </table>
                </td>
              </tr>
            </table>
          </td>
          <td>
            <div style={{ paddingLeft: 10 }}>
              <h3>Month Wise Revenue Report</h3>
              <BarChart
                width={750}
                height={300}
                data={
                  monthWiseRevenueStore.response &&
                  monthWiseRevenueStore.response.data
                }
                margin={{
                  top: 5,
                  right: 30,
                  left: 80,
                  bottom: 5,
                }}
                barSize={20}>
                <XAxis
                  dataKey="month"
                  scale="point"
                  padding={{ left: 40, right: 10 }}
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar
                  dataKey="revenue"
                  fill="#8884d8"
                  background={{ fill: '#eee' }}
                />
              </BarChart>
            </div>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default AdminScreen
