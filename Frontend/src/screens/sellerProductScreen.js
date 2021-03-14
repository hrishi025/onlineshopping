import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductList } from '../actions/sellerActions';
import { deleteProduct } from '../actions/productActions';

const SellerProductScreen = (props) => {
	const dispatch = useDispatch();
	const allProductStore = useSelector((store) => store.allProductStore);
	const { error, response, loading } = allProductStore;

	const deleteProductStore = useSelector((store) => store.deleteProductStore);
	//   const { error, response, loading } = deleteProductStore
	// call this only once (when the page has loaded successfully)
	useEffect(() => {
		dispatch(getProductList());
	}, []);

	useEffect(() => {}, [ error, response, loading ]);

	const onAddProduct = () => {
		props.history.push('/add-product');
	};

	const onUpdate = (p) => {
		console.log('in onUpdate');
		//   <EditSellerProductScreen product={p}/>
		// props.history.push('/seller-update-product')

		props.history.push({
			pathname: '/seller-update-product',
			state: p // your data array of objects
		});
	};

	const onDelete = (p) => {
		dispatch(deleteProduct(p.prod_id));
		window.location.reload(false);

		// props.history.push('/seller')
	};

	return (
		<div>
			<button onClick={onAddProduct} className="btn btn-primary float-end">
				Add Product
			</button>

			<table className="table table-striped">
				<thead>
					<tr>
						<th>Product ID</th>
						<th>Title</th>
						<th>Desc</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{response &&
						response.data &&
						response.data.length > 0 &&
						response.data.map((p) => {
							return (
								<tr>
									<td>{p.prod_id}</td>
									<td>{p.prod_title}</td>
									<td>{p.prod_description}</td>
									<td>{p.prod_price}</td>
									<td>{p.prod_qty}</td>
									<td>
										<button onClick={() => onUpdate(p)} type="button" className="btn btn-primary ">
											Update Product
										</button>
										<button
											onClick={() => onDelete(p)}
											type="button"
											className="btn btn-danger float-end "
										>
											Delete Product
										</button>
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</div>
	);
};

export default SellerProductScreen;
