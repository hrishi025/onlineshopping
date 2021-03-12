import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";

const HomeScreen = (props) => {
  const allProductStore = useSelector((state) => state.allProductStore);
  const { response, loading, error } = allProductStore;

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("in use effect");
    dispatch(getProductList());
  }, []);

  const onAddToCart = (p) => {
    dispatch(addToCart(p.prod_id));
  };

  return (
    <div>
      <Link to="/add-product">add product</Link>
      <strong>Product List</strong>
      <div className="row">
        {response &&
          response.data &&
          response.data.length > 0 &&
          response.data.map((p) => {
            return (
              <div>
                <div className="container">
                  <div className="product col-md-3 col-10">
                    <div className="card">
                      <img
                        src={props.imgsrc}
                        className="card-img-top"
                        alt="Image Loading Failed"
                        width="142"
                        height="142"
                      />
                      <div className="card-body">
                        <h5 className="card-title font-weight-bold">
                          <strong>{p.prod_id}</strong>
                        </h5>
                        <div>
                          <Link to={`/productdetails/${p.prod_id}`}>
                            {p.prod_title}
                          </Link>
                        </div>
                        <div>{p.prod_price}</div>
                        <div>{p.prod_qty}</div>
                        <button
                          onClick={() => {
                            onAddToCart(p);
                          }}
                          className="btn btn-sm btn-success btn-add-to-cart"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default HomeScreen;
