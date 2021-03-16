import { Link } from 'react-router-dom'

const sellerScreen = () => {
  return (
    <div>
      <div className="my-5">
        <h1 className="text-center">Seller Profile</h1>
      </div>

      <div className="col-md-6" col-10 mx-auto>
        <div class="mb-3" class="seller-link">
          <label for="exampleFormControlInput1" class="form-label">
            <Link to="/admin-order-details">
              <span className="nav-link">View Order</span>
            </Link>
          </label>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            <Link to="/show-product">
              <span className="nav-link">Show And Update Products</span>
            </Link>
          </label>
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            <Link to="/view-myorders">
              <span className="nav-link">View My Orders</span>
            </Link>
          </label>
        </div>
        <hr />
        <div class="mb-3" class="seller-link">
          <label for="exampleFormControlInput1" class="form-label">
            <Link to="/user-order-details">
              <span className="nav-link">
                View User Order Details Hide from User Screen
              </span>
            </Link>
          </label>
        </div>

        <div class="mb-3" class="seller-link">
          <label for="exampleFormControlInput1" class="form-label">
            <Link to="/user-myorder">
              <span className="nav-link">View User My Order</span>
            </Link>
          </label>
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            <Link to="/add-product">
              <span className="nav-link">Add Product</span>
            </Link>
          </label>
        </div>
      </div>

      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6" col-10 mx-auto />
        </div>
      </div>
    </div>
  )
}

export default sellerScreen
