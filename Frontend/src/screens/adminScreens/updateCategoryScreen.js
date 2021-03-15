//import Profile from '../../image/profile.svg'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateCategory } from '../../actions/categoryAction'
import {
  CATEGORY_UPDATE_FAIL,
  CATEGORY_UPDATE_REQUEST,
  CATEGORY_UPDATE_SUCCESS,
  CATEGORY_UPDATE_RESET,
} from '../../constants/productConstants'

const UpdateCategoryScreen = (props) => {
  console.log(`props.location.state--->${props.location.state.cat_id}`)

  const cat_id = props.location.state.cat_id
  const cat_title = props.location.state.cat_title
  const cat_desc = props.location.state.cat_description

  const updateCategoryStore = useSelector((state) => state.updateCategoryStore)
  const { response, loading, error } = updateCategoryStore

  const dispatch = useDispatch()

  const [catTitle, setCatTitle] = useState('' + cat_title)
  const [catDesc, setCatDesc] = useState('' + cat_desc)

  useEffect(() => {
    if (response && response.status == 'success') {
      dispatch({ type: CATEGORY_UPDATE_SUCCESS })
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
    dispatch(updateCategory(cat_id, catTitle, catDesc))
  }

  return (
    <div>
      <div className="my-5">
        <h1 className="text-center">Edit Category Details</h1>
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
                defaultValue={cat_title}
                type="text"
                class="form-control"
                onChange={(e) => setCatTitle(e.target.value)}
              />
            </div>

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                <strong>Category Description</strong>
              </label>

              <input
                defaultValue={cat_desc}
                type="text"
                class="form-control"
                onChange={(e) => setCatDesc(e.target.value)}
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

export default UpdateCategoryScreen
