import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCartItems } from "../actions/cartActions";

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
      Admin Dashboard
      <div>
        <Link to="/signin">SignIn</Link>
      </div>
      <div>
        <Link to="/signup">SignUp</Link>
      </div>
      <div>
        <Link to="/add-product">Add Product</Link>
      </div>
    </div>
  );
};

export default AdminScreen;
