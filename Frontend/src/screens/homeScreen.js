import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductList } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';
import { request_url } from '../config/url';

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
						{
							console.log("image url")
							console.log('http://localhost:4000/' + p.photo);
						}
						return (
							<div>
								<div className="product-container">
									<div className="card">
										<img
											src={'http://localhost:4000/' + `${p.photo}`}
											className=" cover rounded mx-auto d-block img-fluid"
											alt="Image Loading Failed"
											width="300px"
											height="300px"
										/>
										<div className="card-body">
											<div>
												<Link to={`/productdetails/${p.prod_id}`}><h6><strong>{p.prod_title}</strong></h6></Link>
											</div>
											<div><h4>₹
											{p.prod_price}
											</h4>
											</div>

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
