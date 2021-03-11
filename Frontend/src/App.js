import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screens/homeScreen'
import SignupScreen from './screens/signupScreen'
import SigninScreen from './screens/signinScreen'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/signup" component={SignupScreen} />
        <Route exact path="/signin" component={SigninScreen} />
      </Router>
    </div>
  )
}

export default App
