import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../actions/userActions'
import { applyForSeller } from '../actions/sellerActions'

const Navigation = (props) => {
  const cart = useSelector((store) => store.cart)
  const dispatch = useDispatch()
  const userSigninStore = useSelector((store) => store.userSigninStore)
  const { error, loading, response } = userSigninStore

  const cartLoginStore = useSelector((state) => state.cartLoginStore)

  const onLogout = () => {
    dispatch(logout())
  }

  const onApply = () => {
    dispatch(applyForSeller())
    alert(
      'Apllied For Seller Successfully..! Please Relogin And Wait Until Admin Approves Your Request.'
    )
    dispatch(logout())
  }

  return (
    <div>
      <nav class="navbar  navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            E-Shopping
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/">
                  <span className="nav-link">Home</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/about">
                  <span className="nav-link">About</span>
                </Link>
              </li>
              {(userSigninStore &&
                userSigninStore.response &&
                userSigninStore.response.status &&
                userSigninStore.response.status == 'error') ||
                (userSigninStore.response == null && (
                  <li className="nav-item">
                    <Link to="/signin">
                      <span className="nav-link">SignIn</span>
                    </Link>
                  </li>
                ))}
              {(userSigninStore &&
                userSigninStore.response &&
                userSigninStore.response.status &&
                userSigninStore.response.status == 'error') ||
                (userSigninStore.response == null && (
                  <li className="nav-item">
                    <Link to="/signup">
                      <span className="nav-link">SignUp</span>
                    </Link>
                  </li>
                ))}
              {userSigninStore &&
                userSigninStore.response &&
                userSigninStore.response.status &&
                userSigninStore.response.status == 'success' &&
                userSigninStore.response.data &&
                userSigninStore.response.data.role == 'ADMIN' && (
                  <li className="nav-item">
                    <Link to="/admin">
                      <span className="nav-link">Admin Dashboard</span>
                    </Link>
                  </li>
                )}

              {userSigninStore &&
                userSigninStore.response &&
                userSigninStore.response.status &&
                userSigninStore.response.status == 'success' &&
                userSigninStore.response.data &&
                userSigninStore.response.data.role == 'SELLER' && (
                  <li className="nav-item">
                    <Link to="/seller">
                      <span className="nav-link">Seller Dashboard</span>
                    </Link>
                  </li>
                )}
              {cartLoginStore &&
                cartLoginStore.response &&
                cartLoginStore.response.data && (
                  <span>
                    <ul class="navbar-nav flex-row justify-content-end flex-wrap align-items-center mr-lg-4 mr-xl-0">
                      <li class="nav-item px-3 text-uppercase mb-0 position-relative d-lg-flex">
                        <div id="cart" class="d-none" />
                        <Link
                          to="/cart"
                          class="cart position-relative d-inline-flex"
                          aria-label="View your shopping cart">
                          <i class="fas fa fa-shopping-cart fa-lg" />
                          <span class="cart-basket d-flex align-items-center justify-content-center">
                            {cartLoginStore.response.data.length}
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </span>
                )}

              {userSigninStore &&
                userSigninStore.response &&
                userSigninStore.response.status &&
                userSigninStore.response.status == 'success' && (
                  <div className="form-control me-2">
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Hello,{' '}
                        {userSigninStore.response.data &&
                          userSigninStore.response.data.name}
                      </a>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink">
                        <li>
                          <Link to="/edit-profile">
                            <span className="nav-link">Edit Profile</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/user-myorder">
                            <span className="nav-link">My Order</span>
                          </Link>
                        </li>

                        {userSigninStore &&
                          userSigninStore.response &&
                          userSigninStore.response.status &&
                          userSigninStore.response.status == 'success' &&
                          userSigninStore.response.data &&
                          userSigninStore.response.data.role == 'CUSTOMER' && (
                            <li>
                              <button
                                onClick={onApply}
                                className="btn btn-sm btn-outline-secondary">
                                Apply For Seller
                              </button>
                            </li>
                          )}
                        <li>
                          <button
                            onClick={onLogout}
                            className="btn btn-outline-success me-2">
                            Logout
                          </button>
                        </li>
                      </ul>
                    </li>
                  </div>
                )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
