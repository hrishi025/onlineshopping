import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../actions/userActions";

const SignupScreen = (props) => {
  const userSignupStore = useSelector((state) => state.userSignupStore);
  const { response, loading, error } = userSignupStore;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();

  const signupButton = () => {
    console.log("in signup button function");
    dispatch(signup(email, password, name, phone));
  };

  useEffect(() => {
    if (response && response.status == "success") {
      props.history.push("/");
    } else if (error) {
      // there is an error while making the API call
      console.log(error);
      alert("error while making API call");
    }
  }, [response, loading, error]);

  return (
    <div>
      <h1>Signup Screen</h1>

      <div>
        <label>Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)}></input>
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>

      <div>
        <label>Name</label>
        <input type="text" onChange={(e) => setName(e.target.value)}></input>
      </div>

      <div>
        <label>Phone</label>
        <input type="text" onChange={(e) => setPhone(e.target.value)}></input>
      </div>

      <div>
        <button type="submit" onClick={signupButton}>
          Signup
        </button>
      </div>
    </div>
  );
};

export default SignupScreen;
