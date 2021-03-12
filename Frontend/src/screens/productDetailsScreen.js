import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { getProductDetails } from "../actions/productActions";

const ProductDetailsScreen = (props) => {
  let params = useParams();
  console.log("params.id" + params.id);

  const allProductStore = useSelector((store) => store.allProductStore);
  const { response, loading, error } = allProductStore;

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("in use effect");
    dispatch(getProductDetails(params.id));
  }, []);

  const onAddToCart = (p) => {
    console.log(p);
    dispatch(addToCart(p.prod_id));
  };

  return (
    <div>
      Product Details Screen
      <div>
        {response &&
          response.data &&
          response.data.length > 0 &&
          response.data.map((p) => {
            return (
              <div>
                <hr />
                <div>{p.prod_id}</div>
                <div>{p.prod_title}</div>
                <div>{p.prod_description}</div>
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

export default ProductDetailsScreen;
