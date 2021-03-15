import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCompany } from '../../actions/companyAction'
import { deleteCompany } from '../../actions/companyAction'

const ShowCompanyScreen = (props) => {
  let params = useParams()
  //console.log('params.id' + params.id);

  const getComponyStore = useSelector((store) => store.getComponyStore)

  const { response, loading, error } = getComponyStore

  const dispatch = useDispatch()

  useEffect(() => {
    console.log('in use effect')
    dispatch(getCompany())
  }, [])

  const onUpdate = (c) => {
    console.log('in onUpdate')
    //   <EditSellerProductScreen product={p}/>
    // props.history.push('/seller-update-product')

    props.history.push({
      pathname: '/update-company',
      state: c, // your data array of objects
    })
  }

  const onDelete = (comp_id) => {
    dispatch(deleteCompany(comp_id))
    window.location.reload(false)

    props.history.push('/show-company')
  }
  const onAddCompany = (c) => {
    props.history.push('/add-company')
  }

  return (
    <div>
      <button onClick={onAddCompany} className="btn btn-primary float-end">
        Add Company
      </button>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Company ID</th>
            <th>Title</th>
            <th>Desc</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {response &&
            response.data &&
            response.data.length > 0 &&
            response.data.map((c) => {
              return (
                <tr>
                  <td>{c.comp_id}</td>
                  <td>{c.comp_title}</td>
                  <td>{c.comp_description}</td>
                  <td>
                    <button
                      onClick={() => onUpdate(c)}
                      type="button"
                      className="btn btn-primary ">
                      Update Company
                    </button>
                    <button
                      onClick={() => onDelete(c.comp_id)}
                      type="button"
                      className="btn btn-danger float-end ">
                      Delete Company
                    </button>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}
export default ShowCompanyScreen
