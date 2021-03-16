import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import HomeScreen from './screens/homeScreen'
import SignupScreen from './screens/signupScreen'
import SigninScreen from './screens/signinScreen'
import Navigation from './components/Navigation'
import addProductList from './screens/addProductScreen'
import ProductDetailsScreen from './screens/productDetailsScreen'
import EditProfileScreen from './screens/editProfileScreen'
import sellerScreen from './screens/sellerScreen'
import EditSellerProductScreen from './screens/editSellerProductScreen'
import CartScreen from './screens/cartScreen'
import MyOrderScreen from './screens/myorderScreen'
import OrderDetailsScreen from './screens/orderDetailsScreen'
import UserListScreen from './screens/adminScreens/userListScreen'
import SellerListScreen from './screens/adminScreens/sellerListScreen'
import AdminScreen from './screens/adminScreens/adminScreen'
import SellerProductScreen from './screens/sellerProductScreen'
import addCompanyScreen from './screens/adminScreens/addCompanyScreen'
import showCompanyScreen from './screens/adminScreens/showCompanysScreen'
import updateCompanyScreen from './screens/adminScreens/updateCompanyScreen'
import categoryScreen from './screens/adminScreens/categoryListScreen'
import updateCategoryScreen from './screens/adminScreens/updateCategoryScreen'
import addCategoryScreen from './screens/adminScreens/addCategoryScreen'
import ShowAllProductAdminScreen from './screens/adminScreens/showAllProductAdminScreen'
import EditAdminProductScreen from './screens/adminScreens/editProductAdminScreen'
import productRatingScreen from './screens/productRatingScreen'
import showAllOrdersAdminScreen from './screens/adminScreens/showAllOrdersAdminScree'
import UserOrderDetailsScreen from './screens/userOrderDetailsScreen'
import UserMyOrderScreen from './screens/userMyorderScreen'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/home" component={HomeScreen} />
        <Route exact path="/signup" component={SignupScreen} />
        <Route exact path="/signin" component={SigninScreen} />
        <Route exact path="/add-product" component={addProductList} />
        <Route exact path="/edit-profile" component={EditProfileScreen} />
        <Route exact path="/cart" component={CartScreen} />
        <Route path="/admin" component={AdminScreen} />
        <Route path="/seller" component={sellerScreen} />
        <Route path="/order-details" component={OrderDetailsScreen} />
        <Route path="/show-product" component={SellerProductScreen} />
        <Route
          path="/seller-update-product"
          component={EditSellerProductScreen}
        />
        <Route
          exact
          path="/productdetails/:id"
          component={ProductDetailsScreen}
        />
        <Route path="/view-myorders" component={MyOrderScreen} />
        <Route path="/get-users" component={UserListScreen} />
        <Route path="/get-seller" component={SellerListScreen} />
        <Route path="/add-company" component={addCompanyScreen} />
        <Route path="/show-company" component={showCompanyScreen} />
        <Route path="/update-company" component={updateCompanyScreen} />
        <Route path="/get-category" component={categoryScreen} />
        <Route path="/update-category" component={updateCategoryScreen} />
        <Route path="/add-category" component={addCategoryScreen} />
        <Route
          path="/get-product-admin"
          component={ShowAllProductAdminScreen}
        />
        <Route
          path="/update-product-admin"
          component={EditAdminProductScreen}
        />
        <Route path="/rate-product" component={productRatingScreen} />
        <Route
          path="/admin-order-details"
          component={showAllOrdersAdminScreen}
        />
        <Route path="/user-order-details" component={UserOrderDetailsScreen} />
        <Route path="/user-myorder" component={UserMyOrderScreen} />
      </Router>
    </div>
  )
}

export default App
