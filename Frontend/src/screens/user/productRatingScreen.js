//import Profile from '../image/profile.svg';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { rateProduct } from '../../actions/productActions'

const ProductRatigScreen = (props) => {
  const orderdetails_id = props.location.state.orderdetails_id
  const dispatch = useDispatch()

  const [rating, setRating] = useState('')
  const [comment, setComment] = useState('')

  const onRateProduct = () => {
    console.log(`in saveButton Method`)
    console.log('prod_id' + orderdetails_id)
    dispatch(rateProduct(orderdetails_id, rating, comment))
    props.history.push('/user-myorder')
  }

  return (
    <div className="signup-form">
      <h2>Rate Product</h2>
      <hr />
      <div className="form-group">
        <input
          type="number"
          className="form-control"
          placeholder="Rating"
          required="required"
          onChange={(e) => setRating(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Review"
          required="required"
          onChange={(e) => setComment(e.target.value)}
        />
      </div>

      <div className="form-group">
        <button
          type="submit"
          onClick={onRateProduct}
          className="btn btn-primary btn-block btn-lg">
          Rate Product
        </button>
      </div>
    </div>
  )
}

export default ProductRatigScreen
