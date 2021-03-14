import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductList } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';

const HomeScreen = (props) => {
	const allProductStore = useSelector((state) => state.allProductStore);
	const { response, loading, error } = allProductStore;

	if (response != null) {
		const cartItems = response.data;
		console.log(cartItems);
	}

	const dispatch = useDispatch();

	useEffect(() => {
		console.log('in use effect');
		dispatch(getProductList());
	}, []);

	const addToCartHandler = (p) => {
		console.log('in addToCartHandler :' + p);
		dispatch(addToCart(p.prod_id, '1'));
		props.history.push('/cart');
	};

	return (
		<div>
			<Link to="/cart">Cart</Link>
			<br />
			<strong>Product List</strong>
			<div className="products-container">
				{response &&
					response.data &&
					response.data.length > 0 &&
					response.data.map((p) => {
						return (
							<div>
								<div className="product-container">
									<div className="card">
										<img
											src={`https://media.wired.com/photos/5e9f56f143e5800008514457/1:1/w_1277,h_1277,c_limit/Gear-Feature-Apple_new-iphone-se-white_04152020.jpg`}
											className="rounded mx-auto d-block img-fluid"
											alt="Image Loading Failed"
											width="300px"
											height="300px"
										/>
										<div className="card-body">
											<h5 className="card-title font-weight-bold">
												<strong>{p.prod_id}</strong>
											</h5>
											<div>
												<Link to={`/productdetails/${p.prod_id}`}>{p.prod_title}</Link>
											</div>
											<div>{p.prod_price}</div>
											<div>{p.prod_qty}</div>
											<button
												onClick={() => addToCartHandler(p)}
												className="btn btn-sm btn-success btn-add-to-cart"
											>
												Add to cart
											</button>
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
