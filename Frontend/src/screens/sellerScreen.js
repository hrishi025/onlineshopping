import { Link } from 'react-router-dom';

const sellerScreen = (props) => {
	return (
		<div>
			<div className="my-5">
				<h1 className="text-center">Seller Profile</h1>
			</div>

			<div className="col-md-6" col-10 mx-auto>
				<div class="mb-3">
					<label for="exampleFormControlInput1" class="form-label">
						<Link to="/order-details">
							<span className="nav-link">View Order</span>
						</Link>
					</label>
				</div>

				<div class="mb-3">
					<label for="exampleFormControlInput1" class="form-label">
						<strong>Update Price</strong>
					</label>
				</div>

				<div class="mb-3">
					<label for="exampleFormControlInput1" class="form-label">
						<Link to="/show-product">
							<span className="nav-link">Show All Products</span>
						</Link>
					</label>
				</div>

				<div class="mb-3">
					<label for="exampleFormControlInput1" class="form-label">
						<Link to="/view-myorders">
							<span className="nav-link">View My Orders</span>
						</Link>
					</label>
				</div>

				<div class="mb-3">
					<label for="exampleFormControlInput1" class="form-label">
						<Link to="/add-product">
							<span className="nav-link">Add Product</span>
						</Link>
					</label>
				</div>

				<div class="mb-3">
					<label for="exampleFormControlInput1" class="form-label">
						<strong>Change Order Status</strong>
					</label>
				</div>
			</div>

			<div className="container contact_div">
				<div className="row">
					<div className="col-md-6" col-10 mx-auto />
				</div>
			</div>
		</div>
	);
};

export default sellerScreen;
