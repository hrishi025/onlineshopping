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
    <div className="signup-form">
      <h2>
        {' '}
        <strong>Add Category Details</strong>{' '}
      </h2>
      <hr />
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Category Title"
          required="required"
          onChange={(e) => setCat_title(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Category description"
          required="required"
          onChange={(e) => setCat_description(e.target.value)}
        />
      </div>

      <div className="form-group">
        <button
          type="submit"
          onClick={saveButton}
          className="btn btn-primary btn-block btn-lg">
          SAVE
        </button>
      </div>
    </div>
  )
}

export default AddCategoryScreen
