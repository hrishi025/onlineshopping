import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCartItems } from "../../actions/cartActions";
import { getPayment }   from "../../actions/adminDashBoardActions"
const AdminScreen = (props) => {
  // const cartItemsStore = useSelector((store) => store.cartItemsStore);
  // const { response, loading, error } = cartItemsStore;

  const paymentStore = useSelector((store) => store.paymentStore);
  const { response, loading, error } = paymentStore;
  //const  { TotalRevenue } = paymentStore.response
 
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("in use effect");
    //dispatch(getAllCartItems());
      dispatch(getPayment())
  }, []);

  return (
    
     

<div>
      <div className="my-5">
        <h1 className="text-center">Admin Profile</h1>
      </div>

       <div className="card-container">
                        
<div className="card bg-primary mb-4">
  <div className="card-header">Total Revenue</div>
  <div className="revenue-div">
				{paymentStore.response &&
					paymentStore.response.data &&
					paymentStore.response.data.length >= 0 &&
					paymentStore.response.data.map((p) => {
						return (
							<div>
							    <div>
                    {p.TotalRevenue}
                  </div>
							</div>
						);
					})}
			</div>
</div>



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
          <Link to="/get-product-admin">
                  <span className="nav-link">Show All Product</span>
          </Link>
          </label>
         
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
          <Link to="/show-company">
                  <span className="nav-link">show Companys</span>
          </Link>
          </label>
         
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            <Link to="/get-category">
              <span className="nav-link">
                Show Categories(update,add,delete)
              </span>
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
