import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import HomeScreen from "./screens/homeScreen";
import SignupScreen from "./screens/signupScreen";
import SigninScreen from "./screens/signinScreen";
import Navigation from "./components/Navigation";
import addProductList from "./screens/addProductScreen";
import ProductDetailsScreen from "./screens/productDetailsScreen";
import EditProfileScreen from "./screens/editProfileScreen";
import AdminScreen from "./screens/adminScreen";

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
        <Route path="/admin" component={AdminScreen} />
        <Route
          exact
          path="/productdetails/:id"
          component={ProductDetailsScreen}
        />
      </Router>
    </div>
  );
}

export default App;
