import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signin } from '../actions/userActions'

const SigninScreen = (props) => {
  const userSigninStore = useSelector((state) => state.userSigninStore)
  const { response, loading, error } = userSigninStore

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const signinButton = () => {
    console.log('in signin button function')
    dispatch(signin(email, password))
  }

  useEffect(() => {
    if (response && response.status == 'success') {
      sessionStorage.setItem('token', response.data.token)
      props.history.push('/')
    } else if (error) {
      // there is an error while making the API call
      console.log(error)
      alert('error while making API call')
    }
  }, [response, loading, error])

  return (
    <div>
      <h1>Signin Screen</h1>

      <div>
        <label>Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)}></input>
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}></input>
      </div>

      <div>
        <button type="submit" onClick={signinButton}>
          Signin
        </button>
      </div>
    </div>
  )
}

export default SigninScreen
