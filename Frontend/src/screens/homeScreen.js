import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductList } from '../actions/productActions'

const HomeScreen = (props) => {
  const allProductStore = useSelector((state) => state.allProductStore)
  const { response, loading, error } = allProductStore

  const dispatch = useDispatch()

  useEffect(() => {
    console.log('in use effect')
    dispatch(getProductList())
  }, [])

  return (
    <div>
      {' '}
      Homescreen
      <div>
        {response &&
          response.data &&
          response.data.length > 0 &&
          response.data.map((p) => {
            return (
              <div>
                <hr />
                <div>{p.prod_id}</div>
                <div><Link to="/productdetails">{p.prod_title}</Link></div>
                <div>{p.prod_price}</div>
                <div>{p.prod_qty}</div>
              </div>
            )
          })}
      </div>
      <div>
        <Link to="/signin">SignIn</Link>
      </div>
      <div>
        <Link to="/signup">SignUp</Link>
      </div>
    </div>
  )
}

export default HomeScreen
