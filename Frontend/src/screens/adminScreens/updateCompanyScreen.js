//import Profile from '../image/profile.svg';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateCompany } from '../../actions/companyAction'
import { COMPANY_UPDATE_REQUEST } from '../../constants/productConstants'
import { COMPANY_UPDATE_SUCCESS } from '../../constants/productConstants'
import { COMPANY_UPDATE_FAIL } from '../../constants/productConstants'

const UpdateCompanyScreen = (props) => {
  console.log(`props.location.state--->${props.location.state.comp_id}`)

  // const {prod_title,prod_price,prod_qty} = props.location.state

  const comp_title = props.location.state.comp_title
  const comp_description = props.location.state.comp_description
  const comp_id = props.location.state.comp_id
  const updateComponyStore = useSelector((state) => state.updateComponyStore)
  const { response, loading, error } = updateComponyStore

  const dispatch = useDispatch()

  const [compTitle, setCompTitle] = useState('' + comp_title)
  const [compDescription, setCompDescription] = useState('' + comp_description)

  const updateButton = () => {
    console.log(`in saveButton Method`)
    dispatch(updateCompany(comp_id, compTitle, compDescription))
    props.history.push('/show-company')
  }

  return (
    <div className="signup-form">
      <h2>Add Company</h2>
      <hr />
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="company_name"
          placeholder="Company Name"
          required="required"
          onChange={(e) => setCompTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="company_desc"
          placeholder="Company description"
          required="required"
          onChange={(e) => setCompDescription(e.target.value)}
        />
      </div>

      <div className="form-group">
        <button
          type="submit"
          onClick={updateButton}
          className="btn btn-primary btn-block btn-lg">
          SAVE
        </button>
      </div>
    </div>
  )
}

export default UpdateCompanyScreen
