import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCartItems } from "../actions/cartActions";

const CartScreen = (props) => {
  const cartItemsStore = useSelector((store) => store.cartItemsStore);
  const { response, loading, error } = cartItemsStore;

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("in use effect");
    dispatch(getAllCartItems());
  }, []);

  return (
    <div>
      CartScreen
      <div>
        {response &&
          response.data &&
          response.data.length > 0 &&
          response.data.map((p) => {
            return (
              <div>
                <hr />
                <div>{p.cart_id}</div>
                <div>{p.user_id}</div>
                <div>{p.prod_id}</div>
                <div>{p.cart_quantity}</div>
              </div>
            );
          })}
      </div>
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

export default CartScreen;
