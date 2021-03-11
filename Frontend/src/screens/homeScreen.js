import { Link } from 'react-router-dom'
const HomeScreen = (props) => {
  return (
    <div>
      {' '}
      Homescreen
      <div>
        <Link to="/signin">SignIn</Link>
      </div>
      <div>
        <Link to="/signup">SignUp</Link>
      </div>
    </div>
  )
}

export default HomeScreen
