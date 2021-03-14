import Profile from '../image/profile.svg';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct } from '../actions/sellerActions';
import { USER_PROFILE_SUCCESS } from '../constants/userConstants';
import { PRODUCT_UPDATE_SUCCESS } from '../constants/productConstants';

const EditSellerProductScreen = (props) => {
	console.log(`props.location.state--->${props.location.state.prod_id}`);

	// const {prod_title,prod_price,prod_qty} = props.location.state

	const prod_id = props.location.state.prod_id;
	const prod_title = props.location.state.prod_title;
	const prod_price = props.location.state.prod_price;
	const prod_qty = props.location.state.prod_qty;

	const updateProductStore = useSelector((state) => state.updateProductStore);
	const { response, loading, error } = updateProductStore;

	const dispatch = useDispatch();

	const [ productTitle, setProductTitle ] = useState('' + prod_title);
	const [ productPrice, setProductPrice ] = useState('' + prod_price);
	const [ productQuantity, setproductQuantity ] = useState('' + prod_qty);

	useEffect(
		() => {
			if (response && response.status == 'success') {
				dispatch({ type: PRODUCT_UPDATE_SUCCESS });
				props.history.push('/show-product');
			} else if (error) {
				// there is an error while making the API call
				console.log(error);
				alert('error while making API call');
			}
		},
		[ response, loading, error ]
	);

	//  console.log(`state---> ${state}`)
	const saveButton = () => {
		console.log(`in saveButton Method`);
		dispatch(updateProduct(prod_id, productTitle, productPrice, productQuantity));
	};

	return (
		<div>
			<div className="my-5">
				<h1 className="text-center">Edit Product Details</h1>
			</div>

			<div className="container contact_div">
				<div className="row">
					<div className="col-md-6" col-10 mx-auto>
						<img
							src={Profile}
							className="img-fluid contact-img"
							alt="profile img"
							height="250"
							width="250"
						/>
					</div>

					<div className="col-md-6" col-10 mx-auto>
						<div class="mb-3">
							<label for="exampleFormControlInput1" class="form-label">
								<strong>Product Title</strong>
							</label>
							<input
								defaultValue={prod_title}
								type="text"
								class="form-control"
								onChange={(e) => setProductTitle(e.target.value)}
							/>
						</div>

						<div class="mb-3">
							<label for="exampleFormControlInput1" class="form-label">
								<strong>Product Price</strong>
							</label>

							<input
								defaultValue={prod_price}
								type="text"
								class="form-control"
								onChange={(e) => setProductPrice(e.target.value)}
							/>
						</div>

						<div class="mb-3">
							<label for="exampleFormControlInput1" class="form-label">
								<strong>Product Quantity</strong>
							</label>
							<input
								defaultValue={prod_qty}
								type="text"
								class="form-control"
								id="exampleFormControlInput1"
								onChange={(e) => setproductQuantity(e.target.value)}
							/>
						</div>

						<div class="col-12">
							<button class="btn btn-success " onClick={saveButton}>
								Save Changes
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditSellerProductScreen;
