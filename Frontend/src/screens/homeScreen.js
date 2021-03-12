import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductList } from '../actions/productActions'
import { addToCart } from '../actions/cartActions'

const HomeScreen = (props) => {
  const allProductStore = useSelector((state) => state.allProductStore)
  const { response, loading, error } = allProductStore

  const dispatch = useDispatch()

  useEffect(() => {
    console.log('in use effect')
    dispatch(getProductList())
  }, [])

  const onAddToCart = (p) => {
    dispatch(addToCart(p.prod_id))
  }

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
                <div>
                  <Link to="/productdetails">{p.prod_title}</Link>
                </div>
                <div>{p.prod_price}</div>
                <div>{p.prod_qty}</div>
                <button
                  onClick={() => {
                    onAddToCart(p)
                  }}
                  className="btn btn-sm btn-success btn-add-to-cart">
                  Add to cart
                </button>
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
