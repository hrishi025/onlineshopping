//import Profile from '../../image/profile.svg'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory } from '../../actions/categoryAction'
import {
  CATEGORY_ADD_FAIL,
  CATEGORY_ADD_REQUEST,
  CATEGORY_ADD_SUCCESS,
  CATEGORY_ADD_RESET,
} from '../../constants/productConstants'

const AddCategoryScreen = (props) => {
  // console.log(`props.location.state--->${props.location.state.cat_id}`)

  // const cat_id = props.location.state.cat_id
  // const cat_title = props.location.state.cat_title
  // const cat_desc = props.location.state.cat_description

  const [cat_title, setCat_title] = useState('')
  const [cat_description, setCat_description] = useState('')

  const addCategoryStore = useSelector((state) => state.addCategoryStore)
  const { response, loading, error } = addCategoryStore

  const dispatch = useDispatch()

  useEffect(() => {
    if (response && response.status == 'success') {
      dispatch({ type: CATEGORY_ADD_SUCCESS })
      props.history.push('/get-category')
    } else if (error) {
      // there is an error while making the API call
      console.log(error)
      alert('error while making API call')
    }
  }, [response, loading, error])

  //  console.log(`state---> ${state}`)
  const saveButton = () => {
    console.log(`in saveButton Method`)
    dispatch(addCategory(cat_title, cat_description))
  }

  return (
    <div>
      <div className="my-5">
        <h2 className="text-center">
          <strong>Add Category Details</strong>
        </h2>
      </div>

      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6" col-10 mx-auto>
            {/* <img
              src={Profile}
              className="img-fluid contact-img"
              alt="profile img"
              height="250"
              width="250"
            /> */}
          </div>

          <div className="col-md-6" col-10 mx-auto>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                <strong>Category Title</strong>
              </label>
              <input
                type="text"
                class="form-control"
                onChange={(e) => setCat_title(e.target.value)}
              />
            </div>

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                <strong>Category Description</strong>
              </label>

              <input
                type="text"
                class="form-control"
                onChange={(e) => setCat_description(e.target.value)}
              />
            </div>

            <div class="col-12">
              <button class="btn btn-success " onClick={saveButton}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddCategoryScreen
