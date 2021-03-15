import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions/userActions';

const Navigation = (props) => {
	const cart = useSelector((store) => store.cart);
	const dispatch = useDispatch();
	const userSigninStore = useSelector((store) => store.userSigninStore);
	const { error, loading, response } = userSigninStore;

	const cartItemsStore = useSelector((state) => state.cartItemsStore);

	const onLogout = () => {
		dispatch(logout());
	};

	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<Link to="/home">
						<span className="navbar-brand">E-Shopping</span>
					</Link>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link to="/">
									<span className="nav-link">Home</span>
								</Link>
							</li>

							<li className="nav-item">
								<Link to="/about">
									<span className="nav-link">About</span>
								</Link>
							</li>
							{(userSigninStore.response &&
								userSigninStore.response.status &&
								userSigninStore.response.status == 'error') ||
								(userSigninStore.response == null && (
									<li className="nav-item">
										<Link to="/signin">
											<span className="nav-link">SignIn</span>
										</Link>
									</li>
								))}
							{(userSigninStore.response &&
								userSigninStore.response.status &&
								userSigninStore.response.status == 'error') ||
								(userSigninStore.response == null && (
									<li className="nav-item">
										<Link to="/signup">
											<span className="nav-link">SignUp</span>
										</Link>
									</li>
								))}

							{userSigninStore.response &&
							userSigninStore.response.status &&
							userSigninStore.response.status == 'success' && (
								<li className="nav-item">
									<Link to="/seller">
										<span className="nav-link">Seller</span>
									</Link>
								</li>
							)}


                           {userSigninStore.response &&
							userSigninStore.response.status &&
							userSigninStore.response.status == 'success' && (
								<li className="nav-item">
									<Link to="/admin">
										<span className="nav-link">Admin</span>
									</Link>
								</li>
							)}


							{userSigninStore.response &&
							userSigninStore.response.status &&
							userSigninStore.response.status == 'success' && (
								<li className="nav-item">
									<Link to="/edit-profile">
										<span className="nav-link">Edit Profile</span>
									</Link>
								</li>
							)}
						</ul>
						<div className="d-flex" />

						{cartItemsStore &&
						cartItemsStore.response &&
						cartItemsStore.response.data && (
							<span>
								<ul class="navbar-nav flex-row justify-content-end flex-wrap align-items-center mr-lg-4 mr-xl-0">
									<li class="nav-item px-3 text-uppercase mb-0 position-relative d-lg-flex">
										<div id="cart" class="d-none" />
										<Link
											to="/cart"
											class="cart position-relative d-inline-flex"
											aria-label="View your shopping cart"
										>
											<i class="fas fa fa-shopping-cart fa-lg" />
											<span class="cart-basket d-flex align-items-center justify-content-center">
												{cartItemsStore.response.data.length}
											</span>
										</Link>
									</li>
								</ul>
							</span>
						)}

						{userSigninStore.response &&
						userSigninStore.response.status &&
						userSigninStore.response.status == 'success' && (
							<div className="d-flex">
								<button onClick={onLogout} className="btn btn-outline-success">
									Logout
								</button>
							</div>
						)}
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navigation;
