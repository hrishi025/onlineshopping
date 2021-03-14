import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../actions/userActions";

const Navigation = (props) => {
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const userSigninStore = useSelector((store) => store.userSigninStore);
  const { error, loading, response } = userSigninStore;
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
                userSigninStore.response.status == "error") ||
                (userSigninStore.response == null && (
                  <li className="nav-item">
                    <Link to="/signin">
                      <span className="nav-link">SignIn</span>
                    </Link>
                  </li>
                ))}
              {(userSigninStore.response &&
                userSigninStore.response.status &&
                userSigninStore.response.status == "error") ||
                (userSigninStore.response == null && (
                  <li className="nav-item">
                    <Link to="/signup">
                      <span className="nav-link">SignUp</span>
                    </Link>
                  </li>
                 
                ))}
              
              {(userSigninStore.response &&
                userSigninStore.response.status &&
                userSigninStore.response.status == "success" && (
               
                  <li className="nav-item">
                    <Link to="/seller">
                      <span className="nav-link">Seller</span>
                    </Link>
                  </li>
                 
                ))}

             {userSigninStore.response &&
              userSigninStore.response.status &&
              userSigninStore.response.status == "success" && (
                 <li className="nav-item">
                    <Link to="/edit-profile">
                      <span className="nav-link">Edit Profile</span>
                    </Link>
                  </li>
              )}
            </ul>
            <div className="d-flex">
              {/* <span className="cart-count">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  fill="black"
                  class="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                {cart.length}
              </span> */}
            </div>
            {userSigninStore.response &&
              userSigninStore.response.status &&
              userSigninStore.response.status == "success" && (
                <div className="d-flex">
                  <button
                    onClick={onLogout}
                    className="btn btn-outline-success"
                  >
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
