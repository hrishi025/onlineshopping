import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductListAdmin } from '../../actions/adminAction'
import { deleteProduct } from '../../actions/productActions'
import { PRODUCT_UPDATE_RESET } from '../../constants/productConstants'

const ShowAllProductAdminScreen = (props) => {
  const dispatch = useDispatch()

  const allProductStore = useSelector((store) => store.allProductStore)
  const { error, response, loading } = allProductStore

  useEffect(() => {
    dispatch(getProductListAdmin())
  }, [])

  useEffect(() => {}, [error, response, loading])

  const onAddProduct = () => {
    props.history.push('/add-product')
  }

  const onUpdate = (p) => {
    console.log('in onUpdate')
    props.history.push({
      pathname: '/update-product-admin',
      state: p, // your data array of objects
    })
  }

  const onDelete = (p) => {
    dispatch(deleteProduct(p.prod_id))
    props.history.push('admin')
  }

  // useEffect(() => {
  //   if (response && response.status == 'success') {
  //     dispatch({ type: PRODUCT_UPDATE_RESET })
  //     props.history.push('/get-product-admin')
  //   } else if (error) {
  //     // there is an error while making the API call
  //     console.log(error)
  //     alert('error while making API call')
  //   }
  // }, [response, loading, error])

  return (
    <div>
      <button onClick={onAddProduct} className="btn btn-primary float-end">
        Add Product
      </button>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Title</th>
            <th>Desc</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {response &&
            response.data &&
            response.data.length > 0 &&
            response.data.map((p) => {
              return (
                <tr>
                  <td>{p.prod_id}</td>
                  <td>{p.prod_title}</td>
                  <td>{p.prod_description}</td>
                  <td>{p.prod_price}</td>
                  <td>{p.prod_qty}</td>
                  <td>
                    <button
                      onClick={() => onUpdate(p)}
                      type="button"
                      className="btn btn-primary ">
                      Update Product
                    </button>
                    <button
                      onClick={() => onDelete(p)}
                      type="button"
                      className="btn btn-danger float-end ">
                      Delete Product
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

export default ShowAllProductAdminScreen
