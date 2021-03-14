import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { viewOrderDetails } from '../actions/orderActions';

const OrderDetailsScreen = (props) => {
	const viewOrderDetailsStore = useSelector((store) => store.viewOrderDetailsStore);

	const { response, loading, error } = viewOrderDetailsStore;

	const dispatch = useDispatch();

	const onShowMyOrder = (p) => {
		console.log('inside onShowMyOrder ' + p);
		props.history.push('/view-myorders');
	};

	useEffect(() => {
		console.log('in use effect of viewOrderDetails');
		dispatch(viewOrderDetails());
	}, []);

	return (
		<div>
			Order Details Screen
			<table className="table table-striped">
				<thead>
					<tr>
						<th>Order Details ID</th>
						<th>MyOrder ID</th>
						<th>Product ID</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Rating</th>
						<th>Comment</th>
					</tr>
				</thead>
				<tbody>
					{viewOrderDetailsStore.response &&
						viewOrderDetailsStore.response.data &&
						viewOrderDetailsStore.response.data.length > 0 &&
						viewOrderDetailsStore.response.data.map((p) => {
							return (
								<tr>
									<td>{p.orderdetails_id}</td>
									<td>{p.myorder_id}</td>
									<td>{p.product_id}</td>
									<td>{p.price}</td>
									<td>{p.quantity}</td>
									<td>{p.rating}</td>
									<td>{p.comment}</td>
									<td>
										<button
											onClick={() => {
												onShowMyOrder(p);
											}}
											className="btn btn-sm btn-success btn-add-to-cart"
										>
											Show Order Details
										</button>
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
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

export default OrderDetailsScreen;
