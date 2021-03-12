import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductList } from '../actions/productActions'

const categorylist = ['cat1', 'cat2', 'cat3']
const AddProductScreen = (props) => {
  const [prod_title, setProd_title] = useState('')
  const [prod_description, setProd_description] = useState('')
  const [cat_id, setCat_id] = useState('')
  const [prod_price, setProd_price] = useState('')
  const [comp_id, setComp_id] = useState('')
  const [prod_qty, setProd_qty] = useState('')

  const dispatch = useDispatch()

  const addProductStore = useSelector((store) => store.addProductStore)
  const { loading, response, error } = addProductStore

  useEffect(() => {
    if (response && response.status == 'success') {
      props.history.push('/home')
    } else if (error) {
      alert('error')
    }
  }, [loading, response, error])

  const onAdd = () => {
    dispatch(
      addProductList(
        prod_title,
        prod_description,
        cat_id,
        prod_price,
        comp_id,
        prod_qty
      )
    )
  }

  const onCancel = () => {
    props.history.push('/home')
  }

  return (
    <div className="container">
      <div className="form">
        <div className="mb-3">
          <label className="form-label">Product Title</label>
          <input
            onChange={(e) => {
              setProd_title(e.target.value)
            }}
            type="text"
            className="form-control"
            placeholder="title"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Product Description</label>
          <textarea
            onChange={(e) => {
              setProd_description(e.target.value)
            }}
            className="form-control"
            rows="3"></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Product Price</label>
          <input
            onChange={(e) => {
              setProd_price(e.target.value)
            }}
            className="form-control"></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Product Quentity</label>
          <input
            onChange={(e) => {
              setProd_qty(e.target.value)
            }}
            className="form-control"></input>
        </div>
        <div className="mb-3">
          <label for="product" className="form-label">
            Product Category
          </label>
          <select
            id="product"
            onChange={(e) => {
              setCat_id(e.target.value)
            }}
            className="form-control">
            <option value="1">Electronics</option>
            <option value="2">Clothing</option>
            <option value="3">Utensils</option>
            <option value="4">Makeup</option>
          </select>
        </div>
        <div className="mb-3">
          <label for="product" className="form-label">
            Company
          </label>
          <select
            id="product"
            onChange={(e) => {
              setComp_id(e.target.value)
            }}
            className="form-control">
            <option value="1">Apple</option>
            <option value="2">Zara</option>
            <option value="3">Usha</option>
            <option value="4">Lackme</option>
          </select>
        </div>

        <div className="mb-3">
          <button onClick={onAdd} className="btn btn-success">
            Add
          </button>
          <button onClick={onCancel} className="btn btn-danger float-end">
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddProductScreen
