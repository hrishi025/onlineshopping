import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {editprofile } from "../actions/userActions";
import { Link } from "react-router-dom";
import Profile from "../image/profile.svg"

const EditProfileScreen = (props) => {
  const usereditProfileStore  = useSelector((state) => state.editProfileStore );
  const { response, loading, error } = usereditProfileStore ;

 // const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();

  const saveButton = () => {
    console.log("in edit button function");
    dispatch(editprofile(password, name, phone));
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
   


<>
<div className="my-5">
  <h1 className="text-center">Edit Profile</h1>
</div>
<div className="container contact_div">
  <div className="row">
    <div className="col-md-6" col-10 mx-auto>
      <img
        src={Profile}
        className="img-fluid contact-img"
        alt="profile img"
        height="250"
        width="250"
      />
    </div>
    <div className="col-md-6" col-10 mx-auto>
      <form>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            <strong>Full Name</strong>
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            <strong>Email Address</strong>
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            disabled
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            <strong>Contact Number</strong>
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Your Contact Number"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            <strong>Password</strong>
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="New Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        <div class="col-12">
          <button class="btn btn-success " onClick={saveButton} type="submit">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
</>
  );
};

export default EditProfileScreen;



