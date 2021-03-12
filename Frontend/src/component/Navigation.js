import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../actions/userActions'

const Navigation = (props) => {
  const cart = useSelector((store) => store.cart)
  const dispatch = useDispatch()
  const userSigninStore = useSelector((store) => store.userSigninStore)
  const { error, loading, response } = userSigninStore
  const onLogout = () => {
    dispatch(logout())
  }

  return (
    <div>
      {userSigninStore.response && (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link to="/home">
              <span className="navbar-brand">OnlineShopping</span>
            </Link>

            {
              // <button
              //   className="navbar-toggler"
              //   type="button"
              //   data-bs-toggle="collapse"
              //   data-bs-target="#navbarSupportedContent"
              //   aria-controls="navbarSupportedContent"
              //   aria-expanded="false"
              //   aria-label="Toggle navigation">
              //   <span className="navbar-toggler-icon"></span>
              // </button>
            }
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/home">
                    <span className="nav-link">Home</span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/about">
                    <span className="nav-link">About</span>
                  </Link>
                </li>
              </ul>
              <div className="d-flex">
                <span className="cart-count">Cart [{cart.length}]</span>
              </div>

              <div className="d-flex">
                <button onClick={onLogout} className="btn btn-outline-success">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </nav>
      )}
    </div>
  )
}

export default Navigation
