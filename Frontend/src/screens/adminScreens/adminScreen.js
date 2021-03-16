import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCartItems } from '../../actions/cartActions'
import {
  PieChart,
  Pie,
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
import { Chart } from 'react-google-charts'

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
          <td aria-colspan="10%">
            <div className="col-md-4" col-10 mx-auto>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  <button className="btn btn-secondary">
                    {' '}
                    <Link className="link" to="/get-users">
                      <span className="nav-link">
                        <strong>Show All User</strong>
                      </span>
                    </Link>
                  </button>
                </label>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  <button className="btn btn-secondary">
                    <Link className="link" to="/get-seller">
                      <span className="nav-link">
                        <strong>Show All Seller</strong>
                      </span>
                    </Link>
                  </button>
                </label>
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  <button className="btn btn-secondary">
                    <Link className="link" to="/get-product-admin">
                      <span className="nav-link">
                        <strong>Show All Product</strong>
                      </span>
                    </Link>
                  </button>
                </label>
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  <button className="btn btn-secondary">
                    <Link className="link" to="/show-company">
                      <span className="nav-link">
                        <strong>show Companies</strong>
                      </span>
                    </Link>
                  </button>
                </label>
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  <button className="btn btn-secondary">
                    <Link className="link" to="/get-category">
                      <span className="nav-link">
                        <strong>Show Categories</strong>
                      </span>
                    </Link>
                  </button>
                </label>
              </div>
            </div>
          </td>

          <td width="60%">
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

            <div style={{ paddingLeft: 110 }}>
              <h3>Month Wise Revenue Report</h3>
              <BarChart
                width={500}
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

            <div className="card-container">
              <div className="card-link bg-success mb-4">
                <div className="card-header"> Max Sales Product </div>
                <div className="revenue-div">
                  {maxSaleProductStore.response &&
                    maxSaleProductStore.response.data &&
                    maxSaleProductStore.response.data.length >= 0 &&
                    maxSaleProductStore.response.data.map((p) => {
                      return (
                        <div>
                          <div>{p.prod_title}</div>
                          <div>{p.no_of_sale_product}</div>
                        </div>
                      )
                    })}
                </div>
              </div>
            </div>

            {/* <div className="card-container">
              <div className="card-link bg-primary mb-4">
                <div className="card-header"> Month Wise Revenue </div>
                <div className="revenue-div">
                  {monthWiseRevenueStore.response &&
                    monthWiseRevenueStore.response.data &&
                    monthWiseRevenueStore.response.data.length >= 0 &&
                    monthWiseRevenueStore.response.data.map((p) => {
                      return (
                        <div>
                          <div>{p.month}</div>
                          <div>{p.revenue}</div>
                        </div>
                      )
                    })}
                </div>
              </div>
            </div> */}
          </td>
        </tr>
      </table>
    </div>
  )
}

export default AdminScreen
