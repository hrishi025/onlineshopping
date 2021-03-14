import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCartItems, removeFromCart, updateCart } from '../actions/cartActions';
import { Link } from 'react-router-dom';

const CartScreen = (props) => {
	const userSigninStore = useSelector((state) => state.userSigninStore);

	const cartItemsStore = useSelector((state) => state.cartItemsStore);
	const { response, loading, error } = cartItemsStore;

	let cartItems = [];

	if (response) {
		cartItems = response.data;
		console.log(cartItems);
	}

	let [ total, setTotal ] = useState(0);
	let [ count, setCount ] = useState(0);

	const dispatch = useDispatch();

	useEffect(() => {
		console.log('in use effect');
		if (userSigninStore) {
			dispatch(getAllCartItems());
			setTotal(0);
		}
	}, []);

	useEffect(
		() => {
			if (userSigninStore.response == null) {
				console.log('remove token');
				sessionStorage.removeItem('token');
				props.history.push('/signin');
			}
			if (cartItems != null) {
				setTotal(0);
				console.log('qty updated');
				console.log(cartItems);
				cartItems.map((c) => {
					console.log(total + ' + ' + c.cart_quantity + ' * ' + c.prod_price);
					total = total + c.cart_quantity * c.prod_price;
					setTotal(total);
				});
			}
		},
		[ cartItems ]
	);

	const onIncrement = (product) => {
		if (product.cart_quantity < 5) {
			if (product.cart_quantity < product.prod_qty) {
				console.log('increased: ');
				console.log(product);
				product.cart_quantity = product.cart_quantity + 1;
				setTotal(total + product.prod_price);
				//total = total + product.prod_price;
				console.log(product.cart_quantity + ' ' + total);
			}
		}
	};

	const onDecrement = (product) => {
		// 1 100
		if (product.cart_quantity > 1) {
			console.log('decreased');
			console.log(product);
			product.cart_quantity = product.cart_quantity - 1;
			setTotal(total - product.prod_price);
			//total = total - product.prod_price;
		}
		console.log(product.cart_quantity + ' ' + total);
	};

	const removeItemHandler = (cart_id) => {
		dispatch(removeFromCart(cart_id));
		props.history.push('/signin');
	};

	const continueShopping = () => {
		cartItems.map((c) => {
			dispatch(updateCart(c.cart_id, c.cart_quantity));
		});
		props.history.push('/');
	};

	return (
		<div className="App">
			<section class="section-pagetop bg">
				<div class="container">
					<h2 class="title-page">Shopping cart</h2>
					<hr />
				</div>
			</section>

			<section class="section-content padding-y">
				<div class="container">
					<div class="row">
						<main class="col-md-9">
							<div class="card">
								<table class="table table-borderless table-shopping-cart">
									<thead class="text-muted">
										<tr class="small text-uppercase">
											<th scope="col">Product</th>
											<th scope="col" width="120">
												Quantity
											</th>
											<th scope="col" width="120">
												Price
											</th>
											<th scope="col" class="text-right" width="200">
												{' '}
											</th>
										</tr>
									</thead>

									{response &&
										response.data &&
										cartItems &&
										cartItems.map((c) => {
											return (
												<tbody key={c.cart_id}>
													<tr>
														<td>
															<figure class="itemside">
																<div class="aside" />
																<figcaption class="info">
																	<Link
																		to={`/productdetails/${c.prod_id}`}
																		class="title text-dark"
																	>
																		{c.prod_title}
																	</Link>
																</figcaption>
															</figure>
														</td>
														<td>
															<nav aria-label="Page navigation example">
																<ul class="pagination">
																	<li class="page-item">
																		<a
																			class="btn btn-warning mx-2"
																			onClick={() => onDecrement(c)}
																		>
																			-
																		</a>
																	</li>
																	<li class="page-item" placeholder={c.cart_quantity}>
																		<input
																			className="form-control mx-1 "
																			type="number"
																			disabled="true"
																			placeholder={c.cart_quantity}
																		/>
																	</li>
																	<li class="page-item">
																		<button
																			class="btn btn-success mx-3"
																			onClick={() => onIncrement(c)}
																		>
																			+
																		</button>
																	</li>
																</ul>
															</nav>
														</td>
														<td>
															<div class="price-wrap">
																<var class="price">{c.prod_price} ₹</var>
															</div>
														</td>
														<td class="text-right">
															<button
																class="btn btn-danger"
																onClick={() => removeItemHandler(c.cart_id)}
															>
																{' '}
																Remove
															</button>
														</td>
													</tr>
												</tbody>
											);
										})}
								</table>

								<div class="card-body border-top">
									<a href="#" class="btn btn-primary float-md-right">
										{' '}
										Make Purchase <i class="fa fa-chevron-right" />{' '}
									</a>
									<button
										class="btn btn-light"
										onClick={() => {
											continueShopping();
										}}
									>
										Continue shopping{' '}
									</button>
								</div>
							</div>

							<div class="alert alert-success mt-3">
								<p class="icontext">
									<i class="icon text-success fa fa-truck" /> Free Delivery within 1-2 weeks
								</p>
							</div>
						</main>
						<aside class="col-md-3">
							<div class="card mb-3">
								<div class="card-body">
									<form>
										<div class="form-group">
											<label>Have coupon?</label>
											<div class="input-group">
												<input
													type="text"
													class="form-control"
													name=""
													placeholder="Coupon code"
												/>
												<span class="input-group-append">
													<button class="btn btn-primary">Apply</button>
												</span>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div class="card">
								<div class="card-body">
									{/* <dl class="dlist-align">
										<dt>Total cart price:</dt>
										<dd class="text-right">{total} ₹</dd>
									</dl> */}
									{/* <dl class="dlist-align">
										<dt>Discount:</dt>
										<dd class="text-right">₹ 658</dd>
									</dl> */}
									<dl class="dlist-align">
										<dt>Total cart price:</dt>
										<dd class="text-right  h5">
											<strong>₹{total}</strong>
										</dd>
									</dl>
									{/* <hr />
									<p class="text-center mb-3">
										<img src="assets/images/misc/payments.png" height="26" />
									</p> */}
								</div>
							</div>
						</aside>
					</div>
				</div>
			</section>
		</div>
	);
};

export default CartScreen;
