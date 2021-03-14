import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCartItems } from "../../actions/cartActions";

const AdminScreen = (props) => {
  const cartItemsStore = useSelector((store) => store.cartItemsStore);
  const { response, loading, error } = cartItemsStore;

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("in use effect");
    dispatch(getAllCartItems());
  }, []);

  return (
    <div>
  <div className="my-5">
    <h1 className="text-center">Admin Profile</h1>
  </div>

      <div className="col-md-6" col-10 mx-auto>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
          <Link to="/get-users">
                  <span className="nav-link">Show All User</span>
          </Link>
          </label>
         
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
          <Link to="/get-seller">
                  <span className="nav-link">Show All Seller</span>
          </Link>
          </label>
         
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
          <Link to="/add-product">
                  <span className="nav-link">Show All Product</span>
          </Link>
          </label>
         
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
          <Link to="/add-product">
                  <span className="nav-link">Add Company</span>
          </Link>
          </label>
         
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
          <Link to="/add-product">
                  <span className="nav-link">Add Category</span>
          </Link>
          </label>
         
        </div>
       
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
          <Link to="/add-product">
                  <span className="nav-link">Show All Seller Request</span>
          </Link>
          </label>
         
        </div>
       
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
          <Link to="/add-product">
                  <span className="nav-link">Total Revenue</span>
          </Link>
          </label>
         
        </div>
     
      </div>

 <div className="container contact_div">
    <div className="row">
        <div className="col-md-6" col-10 mx-auto>
        
         </div>
    </div>
  </div>
</div>

);
};

export default AdminScreen;
